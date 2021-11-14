import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import uuid from 'react-native-uuid';
import { Counter, countersStorageHelper } from '../../utils/helpers';
import {
  CounterActionButton,
  DecrementCounterButton,
  IncrementCounterButton,
  OverlaySpinner,
  ResetButton,
} from './components';
import { ConfigProps } from './config.interface';
import { styles } from './config.styles';

export const Config = ({ route, navigation }: ConfigProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id, count: currentCount, name } = route.params;
  const [count, setCount] = useState<number>(currentCount);

  const handleCounterActionButtonAdd = useCallback(async () => {
    setIsLoading(true);
    const counters = await countersStorageHelper.get();

    const newCounterId = uuid.v4() as string;

    const counter: Counter = {
      id: newCounterId,
      name: `Counter ${newCounterId}`,
      count: 0,
    };

    counters.push(counter);
    await countersStorageHelper.save(counters);
    setIsLoading(false);
    navigation.goBack();
  }, [navigation]);

  const handleCounterActionButtonRemove = useCallback(async () => {
    setIsLoading(true);
    const counters = await countersStorageHelper.get();
    const newCounters = counters.filter(counter => counter.id !== id);
    await countersStorageHelper.save(newCounters);
    setIsLoading(false);
    navigation.goBack();
  }, [id, navigation]);

  const handleSetCount = useCallback((value: number) => {
    setCount(value);
  }, []);

  const handleResetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <OverlaySpinner />}
      <View style={styles.content}>
        <View style={styles.countersContainer}>
          <Text style={styles.title}>Counters</Text>
          <View style={styles.actionContainer}>
            <CounterActionButton
              title="Add"
              onPress={handleCounterActionButtonAdd}
            />
            <CounterActionButton
              title="Remove"
              onPress={handleCounterActionButtonRemove}
            />
          </View>
        </View>

        <View style={styles.selectedCounterContainer}>
          <Text style={styles.title}>Selected Counter</Text>
          <View style={styles.selectedCounterData}>
            <View style={styles.selectedCountContainer}>
              <Text style={styles.selectedCounterName}>Name: {name}</Text>
              <Text style={styles.selectedCounterName}>Count: {count}</Text>
            </View>
            <View style={styles.selectedCounterActions}>
              <DecrementCounterButton counterId={id} onPress={handleSetCount} />
              <IncrementCounterButton counterId={id} onPress={handleSetCount} />
              <ResetButton counterId={id} onPress={handleResetCount} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
