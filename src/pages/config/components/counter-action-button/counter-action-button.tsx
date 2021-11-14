import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CounterActionButtonProps } from './counter-action-button.interface';
import { styles } from './counter-action-button.styles';

export const CounterActionButton = ({
  title,
  ...restProps
}: CounterActionButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...restProps}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Counter</Text>
    </TouchableOpacity>
  );
};
