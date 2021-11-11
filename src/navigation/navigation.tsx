import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './routes/stack.routes';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
