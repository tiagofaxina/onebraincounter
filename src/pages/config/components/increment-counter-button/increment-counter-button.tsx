import React, { useCallback } from 'react';
import { countersStorageHelper } from '../../../../utils/helpers';
import { CounterControlButton } from '../counter-control-button';
import { IncrementCounterButtonProps } from './increment-counter-button.interface';

export const IncrementCounterButton: React.FC<IncrementCounterButtonProps> = ({
  counterId,
  ...restProps
}) => {
  const handleIncrementCounter = useCallback(async () => {
    const counters = await countersStorageHelper.get();
    const foundIndex = counters.findIndex(counter => counter.id === counterId);
    counters[foundIndex].count++;
    await countersStorageHelper.save(counters);
  }, [counterId]);

  return (
    <CounterControlButton
      counterId={counterId}
      name="plus-square"
      onPress={handleIncrementCounter}
      {...restProps}
    />
  );
};
