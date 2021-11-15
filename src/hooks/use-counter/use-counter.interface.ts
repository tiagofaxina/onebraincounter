export type Counter = {
  id: string;
  name: string;
  count: number;
};

export type UseCounterContextProps = {
  selectedCounter: Counter | null;
  setSelectedCounter: (counter: Counter | null) => void;
  setCount: (count: number) => void;
};
