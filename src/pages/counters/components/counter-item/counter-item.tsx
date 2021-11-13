import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CounterItemProps } from './counter-item.interface';
import { styles } from './counter-item.styles';

export const CounterItem = ({
  title,
  count,
  isActive,
  containerProps: { style, ...restContainerProps } = {
    style: {},
  },
  ...restProps
}: CounterItemProps) => {
  return (
    <View
      style={[isActive ? styles.active : styles.inactive, style]}
      {...restContainerProps}>
      <TouchableOpacity style={styles.container} {...restProps}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{String(count).padStart(4, '0')}</Text>
      </TouchableOpacity>
    </View>
  );
};
