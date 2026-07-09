import QuestionCard from "./QuestionCard";
import Timer from "./Timer";

function QuizScreen({
    question,
    onAnswer,
    timeLeft,
    selectedAnswer,
    currentQuestion,
    totalQuestions,
    feedback,
    score,
}) {
    return (
        <div className="max-w-2xl mx-auto">

            {/* Question Number and Score */}
            <div className="bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-5 mb-6 shadow-lg">

                <div className="flex justify-between items-center mb-4">

                     <div>
                <p className="text-emerald-200 text-sm uppercase tracking-wide">
                    Current Question
                </p>

                <h2 className="text-xl font-bold text-white">
                    {currentQuestion + 1}
                    <span className="text-emerald-400">
                        {" "} / {totalQuestions}
                    </span>
                </h2>
            </div>

            <div className="text-right">
                <p className="text-emerald-200 text-sm uppercase tracking-wide">
                    Correct
                </p>

                <h2 className="text-2xl font-bold text-emerald-400">
                    {score}
                </h2>
            </div>

        </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500"
                         style={{
                            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
                        }}
                    ></div>
                </div>

            </div>
            <Timer timeLeft={timeLeft} />
            <QuestionCard
                question={question}
                onAnswer={onAnswer}
                selectedAnswer={selectedAnswer}
            />

            {/* Feedback */}
            {feedback === "correct" && (
                <div className="mt-5 text-center text-green-400 font-bold">
                    ✅ Correct! Well done!
                </div>
            )}

            {feedback === "wrong" && (
                <div className="mt-5 text-center text-red-400 font-bold">
                    ❌ Incorrect! The correct answer is highlighted.
                </div>
            )}
        </div>
    );
}

export default QuizScreen;