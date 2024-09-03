import { useState } from 'react'
import './App.css';
import Jerga from './components/Jerga';
import { useBinaryTime } from './hooks/useBinaryTime';
import { timeToBinary } from './utils/timeToBinary';
import StyleController from './components/ui/StyleController';
import { ColorProvider } from './contexts/ColorContext';
import { BlurProvider } from './contexts/BlurContext';

function App() {
  const [showStyleController, setShowStyleController] = useState(false);

  const toggleStyleController = () => {
    setShowStyleController(prevState => !prevState)
  };

  const time = useBinaryTime();
  const fTime = timeToBinary(time, 'hms'); 
  // const fDate = timeToBinary(time, 'date');

  return(
    <BlurProvider>
      <ColorProvider>
        <div className='timeCont'>
          {/* <Jerga stringInput={fDate} /> */}
          <button className="settingsMenu" onClick={toggleStyleController}>⚙</button>
          <Jerga stringInput={fTime} />
          {showStyleController && <StyleController />}
          {/* <h1>bart</h1> */}
        </div>
      </ColorProvider>
    </BlurProvider>
  )
}

export default App
