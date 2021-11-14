import { useIsFocused } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { countersStorageHelper } from '../../utils/helpers';
import { OverlaySpinner } from '../config/components';
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
      console.log(countersData);
      setCounters(countersData);
      setSelectedItem(countersData[0]);
      setIsLoading(false);
    })();
  }, [isFocused]);

  const handleOnCounterPress = useCallback(
    item => {
      setSelectedItem(item);
      navigation.navigate('Config', { ...item });
    },
    [navigation],
  );

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
