
import { Letter } from './Letter';

export function Letters({handelClick}) {
    const letters = Array.from({ length: 26 }, (_, index) => String.fromCharCode('A'.charCodeAt(0) + index));

    
  return (
    <div>
      <div>Available letters:</div>
      {letters.map((letter,index)=> <Letter handelClick={handelClick} value={letter} key={index}/>) }
    </div>
  );
}
