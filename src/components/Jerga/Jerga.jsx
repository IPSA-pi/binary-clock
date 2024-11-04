import { useContext } from 'react';
import { StyleContext } from '../../contexts/StyleContext';
import Row from './Row';
import { stringToBinaryArray } from '../../utils/stringToBinaryArray';
import './jerga.css';

function Jerga({ stringInput, toggleStyleController }) {
  const { blurValue, borderThickness, colorOne } = useContext(StyleContext);
  const bArray = stringToBinaryArray(stringInput, 4);

  return (
    <div
      className="jerga"
      style={{
        filter: `blur(${blurValue}px)`,
        border: `${borderThickness}px solid ${colorOne}`
      }}
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