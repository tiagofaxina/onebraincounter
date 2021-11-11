import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Counters } from '../../pages/counters';
import { Config } from '../../pages/config';
import colors from '../../styles/colors';

const Stack = createNativeStackNavigator();

export const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.blue[900] },
        headerTitleStyle: {
          fontSize: 32,
        },
        statusBarHidden: true,
      }}>
      <Stack.Screen name="Counters" component={Counters} />
      <Stack.Screen name="Config" component={Config} />
    </Stack.Navigator>
  );
};
