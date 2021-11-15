import React, { useCallback } from 'react';
import { AlertHelper } from '../../../../utils/helpers/alert.helper';
import { countersStorageHelper } from '../../../../utils/helpers';
import { CounterControlButton } from '../counter-control-button';
import { DecrementCounterButtonProps } from './decrement-counter-button.interface';

export const DecrementCounterButton: React.FC<DecrementCounterButtonProps> = ({
  counterId,
  onPress,
  ...restProps
}) => {
  const handleDecrementCounter = useCallback(async () => {
    try {
      const counters = await countersStorageHelper.get();
      const foundIndex = counters.findIndex(
        counter => counter.id === counterId,
      );

      if (counters[foundIndex].count > 0) {
        const count = counters[foundIndex].count - 1;
        counters[foundIndex].count = count;
        await countersStorageHelper.save(counters);
        onPress && onPress(count);
      }
      AlertHelper.show({ type: 'success', title: '- 1', interval: 1 });
    } catch (error: any) {
      AlertHelper.show({
        type: 'error',
        title: 'Error to decrement counter',
        message: error.message,
      });
    }
  }, [counterId, onPress]);

  return (
    <CounterControlButton
      counterId={counterId}
      name="minus-square"
      onPress={handleDecrementCounter}
      {...restProps}
    />
  );
};
