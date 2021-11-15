export type Counter = {
  id: string;
  name: string;
  count: number;
};

export type UseCounterContextProps = {
  selectedCounter?: Counter;
  setSelectedCounter: (counter: Counter) => void;
};
