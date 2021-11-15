import React, { useCallback, useState } from 'react';
import { UseCounterContext } from './use-counter-context';
import { Counter } from './use-counter.interface';

export const UseCounterProvider: React.FC = ({ children }) => {
  const [selectedCounter, setSelectedCounter] = useState<Counter>();

  const setCount = useCallback((counter: Counter) => {
    setSelectedCounter((prevState = { id: '', name: '', count: 0 }) => ({
      ...prevState,
      ...counter,
    }));
  }, []);

  return (
    <UseCounterContext.Provider
      value={{
        selectedCounter,
        setSelectedCounter: setCount,
      }}>
      {children}
    </UseCounterContext.Provider>
  );
};
