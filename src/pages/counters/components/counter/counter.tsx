import React from 'react';
import { Text, View } from 'react-native';
import { CounterProps } from './counter.interface';
import { styles } from './counter.styles';

export const Counter = ({ title, count }: CounterProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{String(count).padStart(4, '0')}</Text>
    </View>
  );
};
