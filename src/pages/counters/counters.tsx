import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { countersStorageHelper } from '../../utils/helpers';
import { CounterItem } from './components/counter-item';
import { Counter, CountersProps } from './counters.interface';
import { styles } from './counters.styles';

export const Counters = ({ navigation }: CountersProps) => {
  const [selectedItem, setSelectedItem] = useState<Counter | null>(null);
  const [counters, setCounters] = useState<Counter[]>([]);

  useEffect(() => {
    (async () => {
      const countersData = await countersStorageHelper.get();
      setCounters(countersData);
      setSelectedItem(countersData[0]);
    })();
  }, []);

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
      <FlatList
        style={styles.counterList}
        data={counters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
