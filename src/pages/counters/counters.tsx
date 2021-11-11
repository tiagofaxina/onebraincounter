import React, { useCallback, useState } from 'react';
import { Button, FlatList, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Counter as CounterItem } from './components/counter';
import { styles } from './counters.styles';

type Counter = {
  name: string;
  count: number;
};

export const Counters = () => {
  const [active, setActive] = useState<number>(0);

  const handleOnCounterPress = useCallback(
    counterIndex => {
      console.log('counterIndex', counterIndex);
      setActive(counterIndex);
    },
    [setActive],
  );

  console.log('active', active);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.counterList}
        data={[
          { name: 'Counter 1', count: 8 },
          { name: 'Counter 2', count: 12 },
          { name: 'Counter 3', count: 1 },
          { name: 'Counter 4', count: 25 },
          { name: 'Counter 5', count: 13 },
          { name: 'Counter 6', count: 6 },
        ]}
        renderItem={({ index, item: { name, count } }) =>
          index === active ? (
            <TouchableOpacity
              style={[styles.counter, styles.active]}
              onPress={() => handleOnCounterPress(index)}>
              <CounterItem title={name} count={count} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.counter}
              onPress={() => handleOnCounterPress(index)}>
              <CounterItem title={name} count={count} />
            </TouchableOpacity>
          )
        }
      />
    </SafeAreaView>
  );
};
