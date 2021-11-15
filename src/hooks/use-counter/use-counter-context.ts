import { createContext } from 'react';
import { UseCounterContextProps } from './use-counter.interface';

export const UseCounterContext = createContext<UseCounterContextProps>({
  selectedCounter: {
    id: '',
    name: '',
    count: 0,
  },
} as UseCounterContextProps);
