import { useIsFocused } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import uuid from 'react-native-uuid';
import { AlertHelper } from '../../utils/helpers/alert.helper';
import { countersStorageHelper } from '../../utils/helpers';
import { useCounter } from '../../hooks/use-counter';
import { OverlaySpinner } from '../config/components';
import { AddCountButton } from './components';
import { CounterItem } from './components/counter-item';
import { Counter, CountersProps } from './counters.interface';
import { styles } from './counters.styles';

export const Counters = ({ navigation }: CountersProps) => {
  const [counters, setCounters] = useState<Counter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const { selectedCounter, setSelectedCounter } = useCounter();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const countersData = await countersStorageHelper.get();
        setCounters(countersData);
        setSelectedCounter(selectedCounter ?? countersData[0]);
      } catch (error: any) {
        AlertHelper.show({
          type: 'error',
          title: 'Error to init counters',
          message: error.message,
        });
      }

      setIsLoading(false);
    })();
  }, [isFocused]);

  const handleOnCounterPress = useCallback(
    item => {
      setSelectedCounter(item);
      navigation.navigate('Config', { ...item });
    },
    [navigation, setSelectedCounter],
  );

  const handleAddCounter = useCallback(async () => {
    setIsLoading(true);
    try {
      const newCounterId = uuid.v4() as string;

      const counter: Counter = {
        id: newCounterId,
        name: `Counter ${newCounterId}`,
        count: 0,
      };

      await countersStorageHelper.save([counter]);
      setCounters([counter]);
      AlertHelper.show({
        type: 'success',
        title: 'Counter successfully added',
        interval: 4,
      });
    } catch (error: any) {
      AlertHelper.show({
        type: 'error',
        title: 'Error to add counter',
        message: error.message,
      });
    }

    setIsLoading(false);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Counter }) => {
      const { id, name, count } = item;
      return (
        <CounterItem
          title={name}
          count={count}
          onPress={() => handleOnCounterPress(item)}
          isActive={id === selectedCounter?.id}
          containerProps={{ style: styles.counter }}
        />
      );
    },
    [handleOnCounterPress, selectedCounter?.id],
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <OverlaySpinner />}
      <View style={styles.content}>
        {!counters.length && <AddCountButton onPress={handleAddCounter} />}
        <FlatList
          style={styles.counterList}
          data={counters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
