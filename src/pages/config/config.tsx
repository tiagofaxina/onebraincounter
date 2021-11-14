import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import uuid from 'react-native-uuid';
import { Counter, countersStorageHelper } from '../../utils/helpers';
import { CounterAction } from './components';
import { ConfigProps } from './config.interface';
import { styles } from './config.styles';

export const Config = ({ route, navigation }: ConfigProps) => {
  const { id } = route.params;

  const handleCounterActionAdd = useCallback(async () => {
    const counters = await countersStorageHelper.get();

    const newCounterId = uuid.v4() as string;

    const counter: Counter = {
      id: newCounterId,
      name: `Counter ${newCounterId}`,
      count: 0,
    };

    counters.push(counter);
    await countersStorageHelper.save(counters);
  }, []);

  const handleCounterActionRemove = useCallback(async () => {
    const counters = await countersStorageHelper.get();
    const newCounters = counters.filter(counter => counter.id !== id);
    await countersStorageHelper.save(newCounters);
    navigation.goBack();
  }, [id, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counters</Text>
      <View style={styles.actionContainer}>
        <CounterAction title="Add" onPress={handleCounterActionAdd} />
        <CounterAction title="Remove" onPress={handleCounterActionRemove} />
      </View>
    </SafeAreaView>
  );
};
