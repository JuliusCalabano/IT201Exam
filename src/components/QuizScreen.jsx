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
    isPaused,
    pauseTimeLeft,
    onPause,
    onResume,
}) {

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };
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
            {/* Pause Controls */}
            <div className="flex items-center justify-between mt-4 mb-4">

                <p className="text-white text-sm">
                    Pause Time:{" "}
                    <span className="font-bold text-yellow-400">
                        {formatTime(pauseTimeLeft)}
                    </span>
                </p>

                {!isPaused ? (
                    <button
                        onClick={onPause}
                        disabled={pauseTimeLeft <= 0}
                        className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        ⏸ Pause
                    </button>
                ) : (
                    <button
                        onClick={onResume}
                        className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-black font-bold transition"
                    >
                        ▶ Resume
                    </button>
                )}

            </div>
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

            {/* Pause Overlay */}
            {isPaused && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

                    <div className="text-center text-white bg-slate-900/95 border border-yellow-500/40 rounded-2xl p-10 shadow-2xl">

                        <div className="text-5xl mb-4">
                            ⏸️
                        </div>

                        <h2 className="text-3xl font-bold mb-2">
                            Quiz Paused
                        </h2>

                        <p className="text-gray-300 mb-4">
                            Remaining Pause Time
                        </p>

                        <div className="text-6xl font-bold text-yellow-400 mb-8">
                            {formatTime(pauseTimeLeft)}
                        </div>

                        <button
                            onClick={onResume}
                            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition"
                        >
                            ▶ Resume Quiz
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}

export default QuizScreen;