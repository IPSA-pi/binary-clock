import { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext'
import Cell from './Cell';

function Row({ bString }) {
  const { colorZero, colorOne } = useContext(ColorContext);
  

  return(
    <div className='row'>
      {
        bString.split('').map((char, index) => (
          <Cell
            key={index}
            className={char === '0' ? 'cero' : 'uno'}
            style={{ backgroundColor: char === '0' ? colorZero : colorOne}}
          />
        ))}
    </div>
  )
}

export default Row