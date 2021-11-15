import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AlertHelper } from '../../../../utils/helpers/alert.helper';
import { countersStorageHelper } from '../../../../utils/helpers';
import { ResetButtonProps } from './reset-button.interface';
import { styles } from './reset-button.styles';

export const ResetButton: React.FC<ResetButtonProps> = ({
  onPress,
  counterId,
  ...restProps
}) => {
  const handleResetCounter = useCallback(async () => {
    try {
      const counters = await countersStorageHelper.get();
      const foundIndex = counters.findIndex(
        counter => counter.id === counterId,
      );

      counters[foundIndex].count = 0;
      await countersStorageHelper.save(counters);
      AlertHelper.show({
        type: 'success',
        title: 'Counter reset successfully',
        interval: 2,
      });
      onPress && onPress();
    } catch (error: any) {
      AlertHelper.show({
        type: 'error',
        title: 'Error to reset counter',
        message: error.message,
      });
    }
  }, [counterId, onPress]);

  return (
    <TouchableOpacity onPress={handleResetCounter} {...restProps}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset</Text>
      </View>
    </TouchableOpacity>
  );
};
