function StartScreen({ 
    title, 
    totalQuestions,
    studentName,
    setStudentName, 
    onStart }) {
        
        const handleSubmit = (e) => {
        e.preventDefault();

        if (studentName.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        onStart();
    };


    return (
        <div className="min-h-screen flex items-center justify-center p-6 ">

            <div className="text-center max-w-lg">

                <div className="mb-8">

                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-5xl shadow-lg shadow-emerald-500/30">
                        🧠
                    </div>

                    <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                        {title}
                    </h1>

                    <p className="text-slate-400 text-lg">
                        Test your knowledge with <b>{totalQuestions}</b> questions
                    </p>

                </div>

                <div className="bg-black/50 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 mb-8">

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <p className="text-emerald-200 text-sm">
                                Questions
                            </p>

                            <h2 className="text-2xl font-bold text-white">
                                {totalQuestions}
                            </h2>
                        </div>

                        <div>
                            <p className="text-emerald-200 text-sm ">
                                Time Limit
                            </p>

                            <h2 className="text-2xl font-bold text-white">
                                40 sec
                            </h2>

                        </div>

                    </div>

                </div>
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full p-3 rounded-xl
               bg-black/40
               border border-emerald-400/40
               text-white
               placeholder:text-gray-300
               focus:outline-none
               focus:ring-2
               focus:ring-emerald-400
               focus:border-emerald-400
               mb-6"  />

                    <button
                        type="submit"
                         className="w-full py-3 rounded-xl font-semibold
               bg-gradient-to-r
               from-emerald-500
               to-green-600
               hover:from-emerald-400
               hover:to-green-500
               transition-all
               duration-300
               shadow-lg
               shadow-emerald-500/30"
                    >
                        Start Quiz
                    </button>

                </form>

            </div>

        </div>
    );
}

export default StartScreen;