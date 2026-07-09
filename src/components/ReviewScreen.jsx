function ReviewScreen({
    questions,
    userAnswers,
    onBack
}) {

    return (

        <div className="min-h-screen  p-10">

            <div className="flex justify-between mb-8">

                <h1 className="text-3xl font-bold text-white">
                    Review Answers
                </h1>

                <button
                    onClick={onBack}
                    className="bg-slate-700 px-4 py-2 rounded"
                >
                    Back
                </button>

            </div>

            {userAnswers.map((answer, index) => {

                const q = questions[answer.questionIndex];

                const isCorrect =
                    answer.selected === answer.correct;

                return (

                    <div
                        key={index}
                        className={`mb-5 p-6 rounded-xl ${
                            isCorrect
                                ? "bg-green-900"
                                : "bg-red-900"
                        }`}
                    >

                        <h2 className="font-bold text-white mb-3">

                            Question {index + 1}

                        </h2>

                        <p className="text-white mb-3">

                            {q.question}

                        </p>

                        <p>

                            Your Answer :

                            <span className="font-bold ml-2">

                                {
                                    answer.timedOut
                                        ? "No Answer"
                                        : q.options[answer.selected]
                                }

                            </span>

                        </p>

                        {!isCorrect && (

                            <p className="mt-2">

                                Correct Answer :

                                <span className="text-green-400 ml-2">

                                    {q.options[answer.correct]}

                                </span>

                            </p>

                        )}

                    </div>

                );

            })}

        </div>

    );

}

export default ReviewScreen;