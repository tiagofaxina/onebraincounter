import { CounterControlButtonProps } from '../counter-control-button/counter-control-button.interface';

export type DecrementCounterButtonProps = Omit<
  CounterControlButtonProps,
  'name' | 'onPress'
> & {
  onPress?: (count: number) => void;
};
