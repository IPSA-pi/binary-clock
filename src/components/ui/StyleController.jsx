import { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { BlurContext } from '../../contexts/BlurContext';
import './StyleController.css'

function ColorPicker() {
  const { colorZero, setColorZero, colorOne, setColorOne } = useContext(ColorContext);
  const { blurValue, setBlurValue } = useContext(BlurContext);
  
  const handleZeroChange = (event) => {
    setColorZero(event.target.value);
  }

  const handleOneChange = (event) => {
    setColorOne(event.target.value);
  }

  const handleBlurChange = (event) => {
    setBlurValue(event.target.value);
  }

  const handleSwapColors = () => {
    const temp = colorZero;
    setColorZero(colorOne);
    setColorOne(temp);
  }

  return(
    <div className="styleController">
      <div className="colorControls">
        {/* <label>0:</label> */}
        <input type="color" value={colorZero} onChange={handleZeroChange} />
        <button onClick={handleSwapColors}>Swap!</button>
        {/* <label>1:</label> */}
        <input type="color" value={colorOne} onChange={handleOneChange} />
      </div>

      <div className="blurControl">
        <label >Blur:</label>
        <input 
          type="range"
          min='0'
          max='25'
          value={blurValue}
          onChange={handleBlurChange}
          />
          <span>{blurValue}px</span>
      </div>
      
    </div>
  )
}

export default ColorPicker;