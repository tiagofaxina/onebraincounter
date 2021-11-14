import React, { useCallback } from 'react';
import { countersStorageHelper } from '../../../../utils/helpers';
import { CounterControlButton } from '../counter-control-button';
import { DecrementCounterButtonProps } from './decrement-counter-button.interface';

export const DecrementCounterButton: React.FC<DecrementCounterButtonProps> = ({
  counterId,
  ...restProps
}) => {
  const handleDecrementCounter = useCallback(async () => {
    const counters = await countersStorageHelper.get();
    const foundIndex = counters.findIndex(counter => counter.id === counterId);

    if (counters[foundIndex].count > 0) {
      counters[foundIndex].count--;
      await countersStorageHelper.save(counters);
    }
  }, [counterId]);
  return (
    <CounterControlButton
      counterId={counterId}
      name="minus-square"
      onPress={handleDecrementCounter}
      {...restProps}
    />
  );
};
