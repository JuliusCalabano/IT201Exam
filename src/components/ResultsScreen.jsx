function ResultsScreen({
    score,
    totalQuestions,
    studentName,
    wrongCount,
    timeoutCount,
    onRestart,
    onReview,
    onSubmit
}) {

    const percentage = (score / totalQuestions) * 100;

    let emoji = "🏆";

    if (percentage >= 90)
        emoji = "🏆";
    else if (percentage >= 70)
        emoji = "🎉";
    else if (percentage >= 50)
        emoji = "👍";
    else if (percentage >= 30)
        emoji = "📚";
    else
        emoji = "💪";

    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="max-w-lg w-full text-center">

                <div className="text-7xl mb-6">
                    {emoji}
                </div>

                <h1 className="text-3xl font-bold text-white">
                    Quiz Complete!
                </h1>

                <p className="text-slate-400 mb-8">
                    Here's how you did
                </p>

                <div className="backdrop-blur-md border border-emerald-500/30 rounded-2xl p-8">
                    <p className="text-lg mt-4 text-white">
                        Student: <strong>{studentName}</strong>
                    </p>
                    <h2 className="text-6xl font-bold text-emerald-200 mb-4">
                        {score}/{totalQuestions}
                    </h2>

                    <div className="grid grid-cols-3 gap-4">

                        <div>
                            <h3 className="text-green-400 text-2xl">
                                {score}
                            </h3>
                            <p className="text-slate-400">
                                Correct
                            </p>
                        </div>

                        <div>
                            <h3 className="text-red-400 text-2xl">
                                {wrongCount}
                            </h3>
                            <p className="text-slate-400 ">
                                Wrong
                            </p>
                        </div>

                        <div>
                            <h3 className="text-yellow-400 text-2xl">
                                {timeoutCount}
                            </h3>
                            <p className="text-slate-400">
                                Timeout
                            </p>
                        </div>

                    </div>

                </div>

                <div className="flex gap-4 mt-6">

                    <button
                        onClick={onRestart}
                        className="flex-1 bg-green-600 py-3 rounded-xl text-white"
                    >
                        Try Again
                    </button>


                    

                    <button
                        onClick={onReview}
                        className="flex-1 bg-slate-700 py-3 rounded-xl text-white"
                    >
                        Review
                    </button>
                </div>
                <button
                        onClick={onSubmit}
                        className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-semibold"
                    >
                        📤 Submit Score
                    </button>

            </div>

        </div>
    );

}

export default ResultsScreen;