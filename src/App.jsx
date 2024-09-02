import './App.css';
import Jerga from './components/Jerga';
import { useBinaryTime } from './hooks/useBinaryTime';
import { timeToBinary } from './utils/timeToBinary';
import ColorPicker from './components/ui/ColorPicker';
import { ColorProvider } from './contexts/ColorContext';

function App() {

  const time = useBinaryTime();
  const fTime = timeToBinary(time, 'hms'); 
  // const fDate = timeToBinary(time, 'date');

  return(
    <ColorProvider>
      <div className='timeCont'>
        {/* <Jerga stringInput={fDate} /> */}
        <Jerga stringInput={fTime} />
        <ColorPicker />
        {/* <h1>bart</h1> */}
      </div>
    </ColorProvider>
  )
}

export default App
