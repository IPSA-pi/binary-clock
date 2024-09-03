import { useContext } from 'react';
import { BlurContext } from '../contexts/BlurContext';
import Row from './Row';
import { stringToBinaryArray } from '../utils/stringToBinaryArray'

function Jerga({ stringInput }) {
  const { blurValue } = useContext(BlurContext);
  const bArray = stringToBinaryArray(stringInput, 4);

  return(
    <div 
      className="jerga"
      style={{ filter: `blur(${blurValue}px)` }}
    >
      {
        bArray.map((bString, index) => (
          <Row bString={bString} key={index}/>
        ))}
    </div>
  )
}

export default Jerga;