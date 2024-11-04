import { useContext } from 'react';
import { BlurContext } from '../../contexts/BlurContext';
import { BorderThicknessContext } from '../../contexts/BorderThicknessContext';
import { ColorContext } from '../../contexts/ColorContext';
import Row from './Row';
import { stringToBinaryArray } from '../../utils/stringToBinaryArray';
import './jerga.css';

function Jerga({ stringInput, toggleStyleController }) {
  const { blurValue } = useContext(BlurContext);
  const { borderThickness } = useContext(BorderThicknessContext);
  const { colorOne } = useContext(ColorContext);

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