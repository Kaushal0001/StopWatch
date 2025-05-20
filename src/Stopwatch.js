import { useEffect, useState } from "react";

const Stopwatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <h1>Stopwatch</h1>
            <p>Time:{formatTime(seconds)}</p>
            <button onClick={handleStartStop} > {isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Stopwatch;