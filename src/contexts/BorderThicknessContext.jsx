import { createContext, useState } from 'react';

export const BorderThicknessContext = createContext();

export const BorderThicknessProvider = ({ children }) => {
  const [borderThickness, setBorderThickness] = useState(20);

  return (
    <BorderThicknessContext.Provider value={{ borderThickness, setBorderThickness }}>
      {children}
    </BorderThicknessContext.Provider>
  );
};