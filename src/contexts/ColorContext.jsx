import { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colorZero, setColorZero] = useState('#000000');
  const [colorOne, setColorOne] = useState('#ffffff');

  return (
    <ColorContext.Provider value={{ colorZero, setColorZero, colorOne, setColorOne }}>
      {children}
    </ColorContext.Provider>
  );
};