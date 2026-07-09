import { useState, useEffect } from 'react'
import questions from "./data/questions.js";
import QuizScreen from "./components/QuizScreen";
import StartScreen from "./components/StartScreen";
import ResultsScreen from "./components/ResultsScreen";
import ReviewScreen from "./components/ReviewScreen";
import Background from "./assets/background.png"

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeoutCount, setTimeoutCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [studentName, setStudentName] = useState("");
  const selectAnswer = (index) => {

    setSelectedAnswer(index);

    const isCorrect = index === questions[currentQuestion].correct;

    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback("correct");
    } else {
      setWrongCount(prev => prev + 1);
      setFeedback("wrong");
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionIndex: currentQuestion,
        selected: index,
        correct: questions[currentQuestion].correct,
        timedOut: false,
      },
    ]);

    setTimeout(() => {

      setFeedback("");
      setSelectedAnswer(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setTimeLeft(40);
      } else {
        setScreen("results");
      }

    }, 1000);

  };


  const [screen, setScreen] = useState("start");

  const startQuiz = () => {
    setScreen("quiz");
  };


  const [timeLeft, setTimeLeft] = useState(40);
  useEffect(() => {

    if (screen !== "quiz") return;

    if (timeLeft <= 0) {

      if (currentQuestion < questions.length - 1) {

        setCurrentQuestion(prev => prev + 1);
        setTimeLeft(40);

      } else {

        setScreen("results");

      }

      return;
    }

    const timer = setTimeout(() => {

      setTimeLeft(prev => prev - 1);

    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, screen, currentQuestion]);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(40);
    setWrongCount(0);
    setTimeoutCount(0);
    setUserAnswers([]);

    // Shuffle questions again (if you're using shuffle)
    // setQuestions(shuffleArray(questionsData));

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





  return (

    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="min-h-screen bg-black/60">
        {screen === "start" && (
          <StartScreen
            title="IT208 - Timed Quiz Challenge"
            totalQuestions={questions.length}
            studentName={studentName}
            setStudentName={setStudentName}
            onStart={startQuiz}
          />
        )}

        {screen === "quiz" && (
          <QuizScreen
            question={questions[currentQuestion]}
            onAnswer={selectAnswer}
            timeLeft={timeLeft}
            selectedAnswer={selectedAnswer}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            score={score}
            feedback={feedback}
          />
        )}

        {screen === "results" && (
          <ResultsScreen
            score={score}
            totalQuestions={questions.length}
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
            questions={questions}
            userAnswers={userAnswers}
            onBack={() => setScreen("results")}
          />
        )}
      </div>
    </div>
  )
}

export default App
