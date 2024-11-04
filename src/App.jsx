import { useState } from 'react';
import './App.css';
import Jerga from './components/Jerga/Jerga';
import { useBinaryTime } from './hooks/useBinaryTime';
import { timeToBinary } from './utils/timeToBinary';
import StyleController from './components/ui/StyleController';
import { ColorProvider } from './contexts/ColorContext';
import { BlurProvider } from './contexts/BlurContext';
import { CellSizeProvider } from './contexts/CellSizeContext';
import { BorderThicknessProvider } from './contexts/BorderThicknessContext';

function App() {
  const [showStyleController, setShowStyleController] = useState(false);

  const toggleStyleController = () => {
    setShowStyleController(prevState => !prevState);
  };

  const time = useBinaryTime();
  const fTime = timeToBinary(time, 'hms');

  return (
    <CellSizeProvider>
      <BlurProvider>
        <ColorProvider>
          <BorderThicknessProvider>
            <div className='timeCont'>
              <Jerga stringInput={fTime} toggleStyleController={toggleStyleController} />
              {showStyleController && <StyleController />}
            </div>
          </BorderThicknessProvider>
        </ColorProvider>
      </BlurProvider>
    </CellSizeProvider>
  );
}

export default App;