import { useContext } from 'react';
import { StyleContext } from '../../contexts/StyleContext';
import './StyleController.css';

function StyleController() {
  const {
    colorZero, setColorZero,
    colorOne, setColorOne,
    blurValue, setBlurValue,
    cellSizeValue, setCellSizeValue,
    borderThickness, setBorderThickness
  } = useContext(StyleContext);

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
        <input
          type="range"
          min='0'
          max='30'
          value={blurValue}
          onChange={handleBlurChange}
        />
      </div>
      <div className="cellSizeControl">
        <input
          type="range"
          min='10'
          max='20'
          value={cellSizeValue}
          onChange={handleCellSizeChange}
        />
      </div>
      <div className="borderThicknessControl">
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