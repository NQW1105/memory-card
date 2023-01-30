import logo from './logo.svg';
import './App.css';

const zodiac = [
  '鼠 shǔ Rat',
  '牛 niú Ox',
  '虎 hǔ Tiger',
  '兔 tù Rabbit',
  '龙 lóng Dragon',
  '蛇 shé Snake',
  '马 mǎ Horse',
  '羊 yáng Goat',
  '猴 hóu Monkey',
  '鸡 jī Rooster',
  '狗 gǒu Dog',
  '猪 zhū Pig',
];

// Red color, Responsive nav header bar
// Golden text with custom font
// 12 cards representing zodiac, red card with golden word
// Every card clicked should shuffle these cards
// Player score (out of 12)
// if player lose or done with 12, reset the game

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
