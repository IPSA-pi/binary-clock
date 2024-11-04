import { useState } from 'react';
import './App.css';
import Jerga from './components/Jerga/Jerga';
import { useBinaryTime } from './hooks/useBinaryTime';
import { timeToBinary } from './utils/timeToBinary';
import StyleController from './components/ui/StyleController';
import { StyleProvider } from './contexts/StyleContext';

function App() {
  const [showStyleController, setShowStyleController] = useState(false);

  const toggleStyleController = () => {
    setShowStyleController(prevState => !prevState);
  };

  const time = useBinaryTime();
  const fTime = timeToBinary(time, 'hms');

  return (
    <StyleProvider>
      <div className='timeCont'>
        <Jerga stringInput={fTime} toggleStyleController={toggleStyleController} />
        {showStyleController && <StyleController />}
      </div>
    </StyleProvider>
  );
}

export default App;