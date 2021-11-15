import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import uuid from 'react-native-uuid';
import { AlertHelper } from '../../utils/helpers/alert.helper';
import { Counter, countersStorageHelper } from '../../utils/helpers';
import { useCounter } from '../../hooks/use-counter';
import {
  CounterActionButton,
  DecrementCounterButton,
  IncrementCounterButton,
  OverlaySpinner,
  ResetButton,
} from './components';
import { ConfigProps } from './config.interface';
import { styles } from './config.styles';

export const Config = ({ navigation }: ConfigProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { selectedCounter, setSelectedCounter, setCount } = useCounter();

  const handleCounterActionButtonAdd = useCallback(async () => {
    setIsLoading(true);
    try {
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
      AlertHelper.show({
        type: 'success',
        title: 'Counter successfully added',
        interval: 1,
      });
      setSelectedCounter(counter);
    } catch (error: any) {
      AlertHelper.show({
        type: 'error',
        title: 'Error to add counter',
        message: error.message,
      });
      setIsLoading(false);
    }
  }, [setSelectedCounter]);

  const handleCounterActionButtonRemove = useCallback(async () => {
    setIsLoading(true);
    try {
      const counters = await countersStorageHelper.get();
      const newCounters = counters.filter(
        counter => counter.id !== selectedCounter?.id,
      );
      await countersStorageHelper.save(newCounters);
      setIsLoading(false);
      AlertHelper.show({
        type: 'success',
        title: 'Counter removed successfully',
      });
      setSelectedCounter(null);
      navigation.goBack();
    } catch (error: any) {
      AlertHelper.show({
        type: 'error',
        title: 'Error to add counter',
        message: error.message,
      });
      setIsLoading(false);
    }
  }, [selectedCounter, navigation, setSelectedCounter]);

  const handleSetCount = useCallback(
    (value: number) => {
      setCount(value);
    },
    [setCount],
  );

  const handleResetCount = useCallback(() => {
    setCount(0);
  }, [setCount]);

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
          <View style={styles.selectedCounter}>
            {selectedCounter ? (
              <View>
                <View style={styles.selectedCountContainer}>
                  <Text style={styles.selectedCounterName}>
                    {selectedCounter?.name}
                  </Text>
                  <Text style={styles.selectedCounterName}>
                    Count: {selectedCounter?.count as number}
                  </Text>
                </View>
                <View style={styles.selectedCounterActions}>
                  <DecrementCounterButton
                    counterId={selectedCounter?.id as string}
                    onPress={handleSetCount}
                  />
                  <IncrementCounterButton
                    counterId={selectedCounter?.id as string}
                    onPress={handleSetCount}
                  />
                  <ResetButton
                    counterId={selectedCounter?.id as string}
                    onPress={handleResetCount}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.noSelectedContainer}>
                <Text style={styles.noSelectedTitle}>Counter Controls</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
