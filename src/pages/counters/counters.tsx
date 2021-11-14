import { useIsFocused } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import uuid from 'react-native-uuid';
import { countersStorageHelper } from '../../utils/helpers';
import { OverlaySpinner } from '../config/components';
import { AddCountButton } from './components';
import { CounterItem } from './components/counter-item';
import { Counter, CountersProps } from './counters.interface';
import { styles } from './counters.styles';

export const Counters = ({ navigation }: CountersProps) => {
  const [selectedItem, setSelectedItem] = useState<Counter | null>(null);
  const [counters, setCounters] = useState<Counter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const countersData = await countersStorageHelper.get();
      setCounters(countersData);

      setIsLoading(false);
    })();
  }, [isFocused]);

  useEffect(() => {
    (async () => {
      setSelectedItem(
        counters.find(counter => counter.id === selectedItem?.id) ??
          counters[0],
      );
    })();
  }, [counters, selectedItem]);

  const handleOnCounterPress = useCallback(
    item => {
      setSelectedItem(item);
      navigation.navigate('Config', { ...item });
    },
    [navigation],
  );

  const handleAddCounter = useCallback(async () => {
    setIsLoading(true);
    const newCounterId = uuid.v4() as string;

    const counter: Counter = {
      id: newCounterId,
      name: `Counter ${newCounterId}`,
      count: 0,
    };

    await countersStorageHelper.save([counter]);
    setCounters([counter]);
    setIsLoading(false);
  }, []);

  const renderItem = ({ item }: { item: Counter }) => {
    const { id, name, count } = item;
    return (
      <CounterItem
        title={name}
        count={count}
        onPress={() => handleOnCounterPress(item)}
        isActive={id === selectedItem?.id}
        containerProps={{ style: styles.counter }}
      />
    );
  };
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
