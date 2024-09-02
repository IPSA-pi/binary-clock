import { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

function ColorPicker() {
  const { colorZero, setColorZero, colorOne, setColorOne } = useContext(ColorContext);
  
  const handleZeroChange = (event) => {
    setColorZero(event.target.value);
  }

  const handleOneChange = (event) => {
    setColorOne(event.target.value);
  }

  return(
    <div className="colorPicker">
      <label>Color for Zero:</label>
      <input type="color" value={colorZero} onChange={handleZeroChange} />
      <label>Color for One:</label>
      <input type="color" value={colorOne} onChange={handleOneChange} />
    </div>
  )
}

export default ColorPicker;