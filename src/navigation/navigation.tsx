import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TabRoutes } from './routes';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};
