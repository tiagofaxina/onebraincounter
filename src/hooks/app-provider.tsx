import React from 'react';
import { UseCounterProvider } from './use-counter';

export const AppProvider: React.FC = ({ children }) => {
  return <UseCounterProvider>{children}</UseCounterProvider>;
};
