import './App.css';
import NavBar from './components/NavBar';
import Score from './components/Score';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';

// const zodiac = [
//   '鼠 shǔ Rat',
//   '牛 niú Ox',
//   '虎 hǔ Tiger',
//   '兔 tù Rabbit',
//   '龙 lóng Dragon',
//   '蛇 shé Snake',
//   '马 mǎ Horse',
//   '羊 yáng Goat',
//   '猴 hóu Monkey',
//   '鸡 jī Rooster',
//   '狗 gǒu Dog',
//   '猪 zhū Pig',
// ];

const zodiacObj = [
  { character: '鼠', word: 'shǔ', animal: 'rat' },
  { character: '牛', word: 'niú', animal: 'ox' },
  { character: '虎', word: 'hǔ', animal: 'tiger' },
  { character: '兔', word: 'tù', animal: 'rabbit' },
  { character: '龙', word: 'lóng', animal: 'dragon' },
  { character: '蛇', word: 'shé', animal: 'snake' },
  { character: '马', word: 'mǎ', animal: 'horse' },
  { character: '羊', word: 'yáng', animal: 'goat' },
  { character: '猴', word: 'hóu', animal: 'monkey' },
  { character: '鸡', word: 'jī', animal: 'rooster' },
  { character: '狗', word: 'gǒu', animal: 'dog' },
  { character: '猪', word: 'zhū', animal: 'pig' },
];

// If player guess wrong, reset score

// Optional:
// Click also make card pop
// Make the score stick top
// Include API if possible
// Update to Fischer yates method

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [array, setArray] = useState([]);

  const incrementScore = () => {
    // Include 'OR' conditional statement, trigger when player lose
    score === 12 || score >= 12 ? setScore(0) : setScore(score + 1);
  };

  const checkArray = (chosenZodiac) => {
    console.log(chosenZodiac);
    // console.log(event.target.classList.contains('card'));
    if (array.includes(chosenZodiac)) {
      console.log('DUPLICATE');
      setScore(0);
      setArray([]);
    } else {
      const updatedArray = array.concat(chosenZodiac);
      setArray(updatedArray);
    }
  };

  // Updating bestScore with componentdidupdate causes duplicate in shuffle cards
  // Alternative is random card instead
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(bestScore + 1);
    }
  }, [score, bestScore]);

  // const updateChosen = () => {
  //   setChosen()
  // }

  // ComponentDidUpdate
  // useEffect(() => {}, []);
  // Click card
  // Compare card to chosenArray
  // If chosen card not included in chosenArray, then add it to chosenArray
  // Else setScore to 0

  return (
    <div className="bg-slate-200">
      <NavBar />
      <Score score={score} bestScore={bestScore} />
      <CardList
        zodiac={zodiacObj}
        incrementScore={incrementScore}
        checkArray={checkArray}
      />
    </div>
  );
}

export default App;
