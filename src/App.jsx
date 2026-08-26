import { useState, useEffect } from 'react'
import questions from "./data/questions.js";
import QuizScreen from "./components/QuizScreen";
import StartScreen from "./components/StartScreen";
import ResultsScreen from "./components/ResultsScreen";
import ReviewScreen from "./components/ReviewScreen";
import Background from "./assets/background.png";
import shuffleArray from "./utils/shuffle";
import { isCloseAnswer } from "./components/CloseAnswer";
import { checkEnumeration } from "./components/CloseAnswer";


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeoutCount, setTimeoutCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [quizQuestions] = useState(() => shuffleArray(questions));
  const [isPaused, setIsPaused] = useState(false);
  const [pauseTimeLeft, setPauseTimeLeft] = useState(300);




  const getQuestionTime = (question) => {
    switch (question.type) {
      case "enumeration":
        return 120; // 90 seconds

      case "identification":
        return 60;

      case "multiple":
      default:
        return 60;
    }
  };

  const selectAnswer = (answer) => {

    setSelectedAnswer(answer);

    const current = quizQuestions[currentQuestion];

    let earnedPoints = 0;
    let isCorrect = false;

    // Multiple Choice
    if (current.type === "multiple") {
      isCorrect = answer === current.correct;

      if (isCorrect) {
        earnedPoints = 1;
      }
    }

    // Identification
    else if (current.type === "identification") {

      if (Array.isArray(current.answer)) {
        isCorrect = current.answer.some(ans =>
          isCloseAnswer(answer, ans)
        );
      } else {
        isCorrect = isCloseAnswer(answer, current.answer);
      }

      if (isCorrect) {
        earnedPoints = 1;
      }
    }

    // Enumeration
    else if (current.type === "enumeration") {
      earnedPoints = checkEnumeration(answer, current.answers);
      isCorrect = earnedPoints > 0;
    }

    // Update score
    if (earnedPoints > 0) {
      setScore(prev => prev + earnedPoints);
    }

    // Update correct/wrong feedback
    if (isCorrect) {
      setFeedback("correct");
    } else {
      setWrongCount(prev => prev + 1);
      setFeedback("wrong");
    }

    // Save answer for review
    setUserAnswers(prev => [
      ...prev,
      {
        questionIndex: currentQuestion,
        selected: answer,
        correct:
          current.type === "multiple"
            ? current.correct
            : current.type === "identification"
              ? current.answer
              : current.answers,
        timedOut: false,
      },
    ]);

    // Next question
    setTimeout(() => {

      setFeedback("");
      setSelectedAnswer(null);

      if (currentQuestion < quizQuestions.length - 1) {
        const nextIndex = currentQuestion + 1;

        setCurrentQuestion(nextIndex);
        setTimeLeft(getQuestionTime(quizQuestions[nextIndex]));
      } else {
        setScreen("results");
      }

    }, 1000);
  };


  const [screen, setScreen] = useState("start");

  const startQuiz = () => {
    setScreen("quiz");
  };

  const handlePause = () => {
    if (pauseTimeLeft <= 0) return;

    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };


  const [timeLeft, setTimeLeft] = useState(
    getQuestionTime(quizQuestions[0])
  );
  // QUIZ TIMER
  useEffect(() => {

    if (screen !== "quiz" || isPaused) return;

    if (timeLeft <= 0) {

      // Count the timeout
      setTimeoutCount(prev => prev + 1);

      // Count it as wrong
      setWrongCount(prev => prev + 1);

      // Save the unanswered question for Review
      const current = quizQuestions[currentQuestion];

      setUserAnswers(prev => [
        ...prev,
        {
          questionIndex: currentQuestion,
          selected: "",
          correct:
            current.type === "multiple"
              ? current.correct
              : current.type === "identification"
                ? current.answer
                : current.answers,
          timedOut: true,
        },
      ]);

      // Go to the next question
      if (currentQuestion < quizQuestions.length - 1) {

        const nextIndex = currentQuestion + 1;

        setCurrentQuestion(nextIndex);
        setTimeLeft(getQuestionTime(quizQuestions[nextIndex]));

      } else {

        setScreen("results");

      }

      return;
    }

    const timer = setTimeout(() => {

      setTimeLeft(prev => prev - 1);

    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, screen, currentQuestion, isPaused]);


  // ⭐ PAUSE TIMER
  useEffect(() => {

    if (!isPaused || pauseTimeLeft <= 0) return;

    const timer = setTimeout(() => {

      setPauseTimeLeft(prev => prev - 1);

    }, 1000);

    return () => clearTimeout(timer);

  }, [isPaused, pauseTimeLeft]);


  // ⭐ AUTOMATICALLY RESUME WHEN PAUSE TIME IS USED
  useEffect(() => {

    if (pauseTimeLeft <= 0 && isPaused) {

      setIsPaused(false);

    }

  }, [pauseTimeLeft, isPaused]);


  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(getQuestionTime(quizQuestions[0]));
    setWrongCount(0);
    setTimeoutCount(0);
    setUserAnswers([]);

    // Reset pause system
    setIsPaused(false);
    setPauseTimeLeft(300);

    setScreen("start");
  };

  const [feedback, setFeedback] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const submitScore = async () => {

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeatjgjdp_Fq3lsSJ7JLdC0yR-bbvJMSDAO78-eeB10lfnTIA/formResponse";
    const formData = new FormData();

    formData.append("entry.366340186", studentName);
    formData.append("entry.868419755", score);
    formData.append("entry.2110275814", wrongCount);
    formData.append("entry.2110275814", timeoutCount);

    try {

      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      alert("Score submitted successfully!");

    } catch (error) {

      alert("Unable to submit score.");

    }

  };


  const totalPoints = quizQuestions.reduce((total, question) => {
    return total + (question.type === "enumeration"
      ? question.answers.length
      : 1);
  }, 0);


  return (

    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="min-h-screen bg-black/60">
        {screen === "start" && (
          <StartScreen
            title="IT201 - Prelim Examination"
            totalQuestions={quizQuestions.length}
            totalPoints={totalPoints}
            studentName={studentName}
            setStudentName={setStudentName}
            onStart={startQuiz}
          />
        )}

        {screen === "quiz" && (
          <QuizScreen
            question={quizQuestions[currentQuestion]}
            onAnswer={selectAnswer}
            timeLeft={timeLeft}
            selectedAnswer={selectedAnswer}
            currentQuestion={currentQuestion}
            totalQuestions={quizQuestions.length}
            score={score}
            feedback={feedback}
            isPaused={isPaused}
            pauseTimeLeft={pauseTimeLeft}
            onPause={handlePause}
            onResume={handleResume}
          />
        )}

        {screen === "results" && (
          <ResultsScreen
            score={score}
            totalQuestions={totalPoints}
            studentName={studentName}
            wrongCount={wrongCount}
            timeoutCount={timeoutCount}
            onRestart={restartQuiz}
            onReview={() => setScreen("review")}
            onSubmit={submitScore}
          />
        )}

        {screen === "review" && (
          <ReviewScreen
            questions={quizQuestions}
            userAnswers={userAnswers}
            onBack={() => setScreen("results")}
          />
        )}
      </div>
    </div>
  )
}

export default App
