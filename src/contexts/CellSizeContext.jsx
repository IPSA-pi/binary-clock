import { createContext, useState } from 'react';

export const CellSizeContext = createContext();

export const CellSizeProvider = ({ children }) => {
  const [cellSizeValue, setCellSizeValue] = useState(10);

  return (
    <CellSizeContext.Provider value={{ cellSizeValue, setCellSizeValue }}>
      {children}
    </CellSizeContext.Provider>
  );
};