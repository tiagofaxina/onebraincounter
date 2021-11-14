import React, { useCallback } from 'react';
import { countersStorageHelper } from '../../../../utils/helpers';
import { CounterControlButton } from '../counter-control-button';
import { IncrementCounterButtonProps } from './increment-counter-button.interface';

export const IncrementCounterButton: React.FC<IncrementCounterButtonProps> = ({
  counterId,
  onPress,
  ...restProps
}) => {
  const handleIncrementCounter = useCallback(async () => {
    const counters = await countersStorageHelper.get();
    const foundIndex = counters.findIndex(counter => counter.id === counterId);
    const count = counters[foundIndex].count + 1;
    counters[foundIndex].count = count;
    await countersStorageHelper.save(counters);
    onPress && onPress(count);
  }, [counterId, onPress]);

  return (
    <CounterControlButton
      counterId={counterId}
      name="plus-square"
      onPress={handleIncrementCounter}
      {...restProps}
    />
  );
};
