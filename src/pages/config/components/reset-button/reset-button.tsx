import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { countersStorageHelper } from '../../../../utils/helpers';
import { ResetButtonProps } from './reset-button.interface';
import { styles } from './reset-button.styles';

export const ResetButton: React.FC<ResetButtonProps> = ({
  onPress,
  counterId,
  ...restProps
}) => {
  const handleResetCounter = useCallback(async () => {
    const counters = await countersStorageHelper.get();
    const foundIndex = counters.findIndex(counter => counter.id === counterId);

    counters[foundIndex].count = 0;
    await countersStorageHelper.save(counters);
    onPress && onPress();
  }, [counterId, onPress]);

  return (
    <TouchableOpacity onPress={handleResetCounter} {...restProps}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset</Text>
      </View>
    </TouchableOpacity>
  );
};
