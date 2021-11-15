import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import { AppProvider } from './src/hooks';
import { Navigation } from './src/navigation/navigation';
import { AlertHelper } from './src/utils/helpers/alert.helper';

const App = () => {
  return (
    <>
      <AppProvider>
        <Navigation />
      </AppProvider>
      <DropdownAlert
        defaultContainer={{
          padding: 8,
          flexDirection: 'row',
        }}
        ref={ref => AlertHelper.setDropDown(ref as DropdownAlert)}
        onClose={() => AlertHelper.invokeOnClose()}
      />
    </>
  );
};

export default App;
