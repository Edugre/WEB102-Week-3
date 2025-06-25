import { useState } from 'react'
import { Card } from './components/card'
import './index.css'
import countries from './countries'

function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(null);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [mastered, setMastered] = useState(new Set());

  const shuffleCards = (countries) => {
    const tempArr = [...countries];
    for (let i = tempArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    return tempArr;
  };
  const [shuffled, setShuffled] = useState(countries);
  
  const availableCards = shuffled.filter(card => !mastered.has(card.name));

  const handleNextClick = () => {
    if (count < availableCards.length - 1) {
      setCount(count + 1);
      setCorrect(null); 
      setAnswer('');
    }
  }

  const handlePreviousClik = () => {
    if (count > 0) {
      setCount(count - 1);
      setCorrect(null);
      setAnswer('');
    }
  }

  const checkAnswer = () => {
    if (availableCards[count].answers.includes(answer.toLowerCase())) {
      setCorrect(true);
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1);
      }
    } else {
      setCorrect(false);
      setStreak(0);
    }
  }
  const handleShuffle = () => {
    setShuffled(shuffleCards(countries));
    setCount(0);
    setCorrect(null);
    setAnswer('');
  }


  const markAsMastered = () => {
    const newMastered = new Set(mastered);
    newMastered.add(availableCards[count].name); 
    setMastered(newMastered);

    const newAvailableCards = availableCards.filter(card => card.name !== availableCards[count].name);
    
    if (newAvailableCards.length === 0) {
      alert('Congratulations! You\'ve mastered all cards!');
      setCount(0);
    } else if (count >= newAvailableCards.length) {
      setCount(newAvailableCards.length - 1);
    }

    setCorrect(null);
    setAnswer('');
  };

  if (availableCards.length === 0) {
    return (
      <div className='body_container'>
        <div className='congratulations_container'>
          <div className='message'>
            <h1>Congratulations!</h1>
            <p>You've mastered all the flags!</p>
            <button onClick={() => setMastered(new Set())}>Reset Progress</button>
          </div>
        </div>
      </div>
    );
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
        <h4>Available of cards: {availableCards.length} | Mastered: {mastered.size}</h4>
      </div>
      <div className='streak'>
        <div className='streakBox'>
          <h4>Current Streak: {streak} | Longest Streak: {longestStreak}</h4>
        </div>
      </div>
      <Card flag={availableCards[count].flag} name={availableCards[count].name} difficulty={availableCards[count].difficulty}/>
      <div className='answer'>
        <input 
          className={`${correct === null ? '' : correct ? ' correct' : ' incorrect'}`} 
          type='text' 
          value={answer}
          placeholder='Type your answer here...' 
          onChange={e => setAnswer(e.target.value)}/>
        <button type='submit' onClick={checkAnswer}>Check Answer</button>
      </div>
      <div className='buttons'>
        <button onClick={handlePreviousClik} className={`${count === 0 ? 'disabled' : ''}`}>←</button>
        <button onClick={handleNextClick} className={`${count === shuffled.length - 1 ? 'disabled' : ''}`}>→</button>
        <button onClick={handleShuffle}>Shuffle Cards</button>
        <button onClick={markAsMastered}>Mark as Mastered</button>
      </div>
    </div>
  )
}

export default App
