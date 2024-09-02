import Row from './Row';
import { stringToBinaryArray } from '../utils/stringToBinaryArray'

function Jerga({ stringInput }) {
  const string = stringInput;
  const bArray = stringToBinaryArray(string, 4);

  return(
    <div className="jerga">
      {
        bArray.map((bString, index) => <Row bString={bString} key={index}/>)
      }
    </div>
  )
}

export default Jerga;