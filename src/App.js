import './App.css';
import NavBar from './components/NavBar';
import Score from './components/Score';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';

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

// Optional:
// Click also make card pop
// Make the score stick top
// Include API if possible
// Update to Fischer yates method

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [zodiacArray, setArray] = useState([]);

  const incrementScore = () => {
    score >= 12 ? setScore(0) : setScore(score + 1);
  };

  const incrementBestScore = () => {
    if (score > bestScore) {
      setBestScore(bestScore + 1);
    }
  };

  const checkArray = (chosenZodiac) => {
    // console.log(chosenZodiac);
    if (zodiacArray.includes(chosenZodiac)) {
      // console.log('DUPLICATE');
      setScore(0);
      setArray([]);
    } else {
      const updatedArray = zodiacArray.concat(chosenZodiac);
      setArray(updatedArray);
    }
  };

  useEffect(() => {
    zodiacObj.sort(() => {
      return 0.5 - Math.random();
    });
  });

  // Updating bestScore with componentdidupdate causes duplicate in shuffle cards
  // Alternative is random card instead
  // useEffect(() => {
  //   if (score > bestScore) {
  //     setBestScore(bestScore + 1);
  //   }
  // }, [score, bestScore]);

  // ComponentDidUpdate
  // useEffect(() => {}, []);

  return (
    <div className="bg-slate-200">
      <NavBar />
      <Score score={score} bestScore={bestScore} />
      <CardList
        zodiac={zodiacObj}
        incrementScore={incrementScore}
        incrementBestScore={incrementBestScore}
        checkArray={checkArray}
      />
    </div>
  );
}

export default App;
