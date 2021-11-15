import { useContext } from 'react';
import { UseCounterContext } from './use-counter-context';
import { UseCounterContextProps } from './use-counter.interface';

export const useCounter = (): UseCounterContextProps => {
  const context = useContext(UseCounterContext);

  if (!context) {
    throw new Error(
      'Hook useCounter must be used within the UseCounterProvider',
    );
  }

  return context;
};
