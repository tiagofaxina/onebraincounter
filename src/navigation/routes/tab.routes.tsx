import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Counters } from '../../pages/counters';
import { Config } from '../../pages/config';
import colors from '../../styles/colors';
import { pages } from '../config/pages.config';

const Tab = createBottomTabNavigator();

export const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.blue[900], height: 80 },
        headerTitleStyle: {
          fontSize: 32,
        },
        tabBarStyle: {
          height: 64,
          backgroundColor: colors.blue[900],
          paddingTop: 4,
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen
        name={pages.COUNTERS}
        component={Counters}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={24} />
          ),
          tabBarInactiveTintColor: colors.gray[500],
          tabBarActiveTintColor: colors.yellow[800],
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
      <Tab.Screen
        name={pages.CONFIG}
        component={Config}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="gears" color={color} size={24} />
          ),
          tabBarInactiveTintColor: colors.gray[500],
          tabBarActiveTintColor: colors.yellow[800],
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
    </Tab.Navigator>
  );
};
