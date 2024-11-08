import { useContext } from 'react';
import { StyleContext } from '../../contexts/StyleContext';
import Cell from './Cell';

function Row({ bString }) {
  const { colorZero, colorOne, cellSizeValue } = useContext(StyleContext);

  return (
    <div className='row'>
      {
        bString.split('').map((char, index) => (
          <Cell
            key={index}
            className={char === '0' ? 'cero' : 'uno'}
            style={{
              backgroundColor: char === '0' ? colorZero : colorOne,
              width: `${cellSizeValue}vw`,
              height: `${cellSizeValue}vw`,
            }}
          />
        ))}
    </div>
  );
}

export default Row;