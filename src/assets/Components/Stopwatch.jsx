import { useEffect, useState } from "react"


const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
        //la forma de hacer un if sin else , solo se pone && 
        timerOn ? (internal = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10))
        :
        (clearInterval(interval))
        return () => clearInterval(interval);
    }, [timerOn])

  return (
    <div className="stopwatch">
        <h2>{time}</h2>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch