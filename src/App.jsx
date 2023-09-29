import { useState } from 'react'
import './App.css'
import DigitalClock from './assets/Components/DigitalClock'
import Countdown from './assets/Components/Countdown'
import Stopwatch from './assets/Components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DigitalClock />
      <Countdown />
      <Stopwatch />
    </>
  )
}

export default App
