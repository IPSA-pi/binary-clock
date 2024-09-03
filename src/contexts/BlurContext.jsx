import { createContext, useState } from 'react';

export const BlurContext = createContext();

export const BlurProvider = ({ children }) => {
  const [blurValue, setBlurValue] = useState(20);

  return (
    <BlurContext.Provider value={{ blurValue, setBlurValue }}>
      { children }
    </BlurContext.Provider>
  );
};