import React from 'react';
import { Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { styles } from './config.styles';

export const Config = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Config</Text>
    </SafeAreaView>
  );
};
