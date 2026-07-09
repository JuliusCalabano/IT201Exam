function Timer({ timeLeft }) {
    return (
        <div className="flex justify-center mb-6">

            <div
                className={`w-20 h-20 rounded-full border-4 flex items-center justify-center
                ${
                    timeLeft <= 10
                        ? "timer-warning border-red-500 bg-red-500/20 shadow-red-500/30"
                        : "timer-ring border-emerald-500 bg-slate-900 shadow-emerald-500/30"
                }`}
            >
                <span className={`text-3xl font-bold ${
                        timeLeft <= 10 ? "text-red-400" : "text-emerald-300"
                    }`}>
                    {timeLeft}
                </span>
            </div>

        </div>
    );
}

export default Timer;