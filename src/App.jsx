import { useState } from 'react'
import { Card } from './components/card'
import './index.css'
import countries from './countries'

function App() {
  const [count, setCount] = useState(0)

  const handleNextClick = () => {
    setCount((count + 1) % 10);
  }
  const handlePreviousClik = () => {
    setCount((count - 1 + 10) % 10);
  }

  return (
    <div className='body_container'>
      <div className='header'>
        <h1>Are you a Flag Master?</h1>
      </div>
      <div className='description'>
        <h3>
          Test your world flag knowledge with fun and interactive flashcards! 
          Guess the country based on its flag, then flip the card to reveal the answer. 
          Great for students, travelers, and trivia lovers!
        </h3>
      </div>
      <div className='numberOfCards'>
        <h4>Number of cards: {countries.length}</h4>
      </div>
      <Card flag={countries[count].flag} name={countries[count].name} difficulty={countries[count].difficulty}/>
      <div className='buttons'>
        <button onClick={handlePreviousClik}>←</button>
        <button onClick={handleNextClick}>→</button>
      </div>
    </div>
  )
}

export default App
