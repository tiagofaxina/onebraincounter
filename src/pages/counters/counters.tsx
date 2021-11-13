import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { countersStorageHelper } from '../../utils/helpers';
import { CounterItem } from './components/counter-item';
import { styles } from './counters.styles';

type Counter = {
  id: string;
  name: string;
  count: number;
};

export const Counters = () => {
  const [selectedItem, setSelectedItem] = useState<string>('1');
  const [counters, setCounters] = useState<Counter[]>([]);

  useEffect(() => {
    (async () => {
      const countersData = await countersStorageHelper.get();
      setCounters(countersData);
    })();
  }, []);

  const handleOnCounterPress = useCallback(
    counterIndex => {
      console.log('counterIndex', counterIndex);
      setSelectedItem(counterIndex);
    },
    [setSelectedItem],
  );

  const renderItem = ({ item: { id, name, count } }: { item: Counter }) => {
    return (
      <CounterItem
        title={name}
        count={count}
        onPress={() => handleOnCounterPress(id)}
        isActive={id === selectedItem}
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
