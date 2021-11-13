import React from 'react';
import { Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { ConfigProps } from './config.interface';
import { styles } from './config.styles';

export const Config = ({ route }: ConfigProps) => {
  const { id, name, count } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};
