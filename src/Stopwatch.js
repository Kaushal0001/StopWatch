import React, { useEffect, useState } from "react";

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = () => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(1, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            
            <h1>Stopwatch</h1>

            <p>Time:{formatTime()}</p>

            {isRunning ? (
                <button onClick={handleStop}>Stop</button>
            ) : (
                <button onClick={handleStart}>Start</button>
            )}
            < button onClick={handleReset}>Reset</button>

        </div >
    );
}

export default Stopwatch;