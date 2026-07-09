function QuestionCard({ question, onAnswer, selectedAnswer, }) {

    return (
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">

            <h2 className="text-xl font-semibold mb-6 leading-relaxed text-white">
                {question.question}
            </h2>

            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        disabled={selectedAnswer !== null}
                        onClick={() => onAnswer(index)}
                        className={`
                            w-full text-left p-4 rounded-xl border-2 transition-all text-white

                            ${selectedAnswer === null
                                ? "bg-slate-700 border-slate-600 hover:bg-slate-600"
                                : selectedAnswer === index
                                    ? selectedAnswer === question.correct
                                        ? "bg-green-600 border-green-600 text-white"
                                        : "bg-red-600 border-red-600 text-white"
                                    : "bg-slate-700 border-slate-600"
                            }
                        `}
                    >
                        <span className="inline-block w-8 h-8 rounded-lg bg-slate-600 text-center leading-8 mr-3 font-semibold">
                            {String.fromCharCode(65 + index)}
                        </span>

                        {option}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default QuestionCard;