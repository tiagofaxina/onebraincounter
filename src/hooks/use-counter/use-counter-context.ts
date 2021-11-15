import { createContext } from 'react';
import { UseCounterContextProps } from './use-counter.interface';

export const UseCounterContext = createContext<UseCounterContextProps>(
  {} as UseCounterContextProps,
);
