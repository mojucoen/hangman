import './App.css';
import { Solution } from './components/Solution';
import { Score } from './components/Score';
import { Letters } from './components/Letters';
import { useState } from 'react';
function App() {

  let [score,setScore] = useState((0));
  let [solution,setSolution] =useState (["_","_","_","_","_","_"]);
  const hint="My family";
  const [secretWord,setSecretWord]=useState("JUABRA")

  const getChar = (char) => {
    const amountScore = (100 / secretWord.length);
  
    if (secretWord.includes(char)) {
      console.log("YES");
      setScore(((prevScore) => prevScore + amountScore));
  
      let secondSec = [...secretWord];
      let index = secretWord.indexOf(char);
      secondSec.splice(index, 1, '*'); // Replace the character at the specified index with "*"
  
      setSecretWord((prevSecretWord) => {
        console.log(prevSecretWord);
        return secondSec.join('');
      });
  
      let cloneArray = [...solution];
      cloneArray[index] = char;
      setSolution(cloneArray);
    } else {
      console.log("NO");
    }
  };
  
  return (
   
   <div className="App">
      <Score value={score.toFixed()}/>
  <Solution solution={solution}/>
    {hint}
  <Letters handelClick={getChar}/ >
  
 

    </div>
  );
}

export default App;
