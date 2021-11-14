import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ResetButtonProps } from './reset-button.interface';
import { styles } from './reset-button.styles';

export const ResetButton: React.FC<ResetButtonProps> = ({ ...restProps }) => {
  return (
    <TouchableOpacity {...restProps}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset</Text>
      </View>
    </TouchableOpacity>
  );
};
