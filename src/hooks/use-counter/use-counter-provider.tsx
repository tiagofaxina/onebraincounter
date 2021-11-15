import React, { useCallback, useState } from 'react';
import { UseCounterContext } from './use-counter-context';
import { Counter } from './use-counter.interface';

export const UseCounterProvider: React.FC = ({ children }) => {
  const [selectedCounter, setSelectedCounter] = useState<Counter | null>(null);

  const setCounter = useCallback((counter: Counter | null) => {
    setSelectedCounter(counter);
  }, []);

  const setCount = useCallback(
    (value: number) => {
      setSelectedCounter({
        id: selectedCounter?.id as string,
        name: selectedCounter?.name as string,
        count: value,
      });
    },
    [selectedCounter],
  );

  return (
    <UseCounterContext.Provider
      value={{
        selectedCounter,
        setSelectedCounter: setCounter,
        setCount,
      }}>
      {children}
    </UseCounterContext.Provider>
  );
};
