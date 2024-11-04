import { useContext } from 'react';
import { BlurContext } from '../../contexts/BlurContext';
import Row from './Row';
import { stringToBinaryArray } from '../../utils/stringToBinaryArray';
import './jerga.css';

function Jerga({ stringInput, toggleStyleController }) {
  const { blurValue } = useContext(BlurContext);
  const bArray = stringToBinaryArray(stringInput, 4);

  return (
    <div
      className="jerga"
      style={{ filter: `blur(${blurValue}px)` }}
      onClick={toggleStyleController}
    >
      {
        bArray.map((bString, index) => (
          <Row bString={bString} key={index} />
        ))}
    </div>
  );
}

export default Jerga;