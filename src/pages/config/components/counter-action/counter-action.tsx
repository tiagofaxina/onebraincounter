import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CounterActionProps } from './counter-action.interface';
import { styles } from './counter-action.styles';

export const CounterAction = ({ title, ...restProps }: CounterActionProps) => {
  return (
    <TouchableOpacity style={styles.container} {...restProps}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Counter</Text>
    </TouchableOpacity>
  );
};
