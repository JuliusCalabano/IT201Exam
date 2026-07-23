import { useState, useEffect } from "react";

function QuestionCard({ question, onAnswer, selectedAnswer, }) {


    const [textAnswer, setTextAnswer] = useState("");
    const [enumAnswers, setEnumAnswers] = useState([]);

    useEffect(() => {
        setTextAnswer("");
        setEnumAnswers([]);
    }, [question]);

    return (
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">

            <h2 className="text-xl font-semibold mb-6 leading-relaxed text-white">
                {question.question}
            </h2>

            <div className="space-y-3">
                {/* Multiple Choice */}
                {question.type === "multiple" && (
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
                                                ? "bg-green-600 border-green-600"
                                                : "bg-red-600 border-red-600"
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
                )}

                {question.type === "identification" && (
                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();

                            if (
                                selectedAnswer === null &&
                                textAnswer.trim() !== ""
                            ) {
                                onAnswer(textAnswer);
                            }
                        }}
                    >
                        <input
                            type="text"
                            value={textAnswer}
                            onChange={(e) => setTextAnswer(e.target.value)}
                            disabled={selectedAnswer !== null}
                            placeholder="Type your answer..."
                            className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 text-white"
                        />

                        <button
                            type="submit"
                            disabled={
                                selectedAnswer !== null ||
                                textAnswer.trim() === ""
                            }
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl"
                        >
                            Submit Answer
                        </button>
                    </form>
                )}

                {/* Enumeration */}
                {question.type === "enumeration" && (
                    <form
                        className="space-y-3"
                        onSubmit={(e) => {
                            e.preventDefault();

                            if (
                                selectedAnswer === null &&
                                enumAnswers.filter(a => a?.trim()).length > 0
                            ) {
                                onAnswer(enumAnswers);
                            }
                        }}
                    >
                        {question.answers.map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                value={enumAnswers[index] || ""}
                                placeholder={`Answer ${index + 1}`}
                                className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600 text-white"
                                onChange={(e) => {
                                    const answers = [...enumAnswers];
                                    answers[index] = e.target.value;
                                    setEnumAnswers(answers);
                                }}
                            />
                        ))}

                        <button
                            type="submit"
                            disabled={
                                selectedAnswer !== null ||
                                enumAnswers.filter(a => a?.trim()).length === 0
                            }
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl"
                        >
                            Submit Answers
                        </button>
                    </form>
                )}

            </div>

        </div>
    );
}

export default QuestionCard;