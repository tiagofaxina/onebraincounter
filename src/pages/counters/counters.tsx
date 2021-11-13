import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { CounterItem } from './components/counter-item';
import { styles } from './counters.styles';

type Counter = {
  id: string;
  name: string;
  count: number;
};

export const Counters = () => {
  const [selectedItem, setSelectedItem] = useState<string>('1');

  const handleOnCounterPress = useCallback(
    counterIndex => {
      console.log('counterIndex', counterIndex);
      setSelectedItem(counterIndex);
    },
    [setSelectedItem],
  );

  console.log('selectedItem', selectedItem);

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
        data={[
          { id: '1', name: 'Counter 1', count: 8 },
          { id: '2', name: 'Counter 2', count: 12 },
          { id: '3', name: 'Counter 3', count: 1 },
          { id: '4', name: 'Counter 4', count: 25 },
          { id: '5', name: 'Counter 5', count: 13 },
          { id: '6', name: 'Counter 6', count: 6 },
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
