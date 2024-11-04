import { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { BlurContext } from '../../contexts/BlurContext';
import { CellSizeContext } from '../../contexts/CellSizeContext';
import { BorderThicknessContext } from '../../contexts/BorderThicknessContext';
import './StyleController.css';

function StyleController() {
  const { colorZero, setColorZero, colorOne, setColorOne } = useContext(ColorContext);
  const { blurValue, setBlurValue } = useContext(BlurContext);
  const { cellSizeValue, setCellSizeValue } = useContext(CellSizeContext);
  const { borderThickness, setBorderThickness } = useContext(BorderThicknessContext);

  const handleZeroChange = (event) => {
    setColorZero(event.target.value);
  };
  const handleOneChange = (event) => {
    setColorOne(event.target.value);
  };
  const handleBlurChange = (event) => {
    setBlurValue(event.target.value);
  };
  const handleCellSizeChange = (event) => {
    setCellSizeValue(event.target.value);
  };
  const handleBorderThicknessChange = (event) => {
    setBorderThickness(event.target.value);
  };
  const handleSwapColors = () => {
    const temp = colorZero;
    setColorZero(colorOne);
    setColorOne(temp);
  };

  return (
    <div className="styleController">
      <div className="colorControls">
        <input type="color" value={colorZero} onChange={handleZeroChange} />
        <button onClick={handleSwapColors}>Swap!</button>
        <input type="color" value={colorOne} onChange={handleOneChange} />
      </div>
      <div className="blurControl">
        <label>Blur:</label>
        <input
          type="range"
          min='0'
          max='100'
          value={blurValue}
          onChange={handleBlurChange}
        />
      </div>
      <div className="cellSizeControl">
        <label>Cell size {cellSizeValue}</label>
        <input
          type="range"
          min='2'
          max='20'
          value={cellSizeValue}
          onChange={handleCellSizeChange}
        />
      </div>
      <div className="borderThicknessControl">
        <label>Border thickness {borderThickness}px</label>
        <input
          type="range"
          min='1'
          max='50'
          value={borderThickness}
          onChange={handleBorderThicknessChange}
        />
      </div>
    </div>
  );
}

export default StyleController;