import React, { useEffect } from 'react';
import { countersStorageHelper } from './src/utils/helpers';

import { Navigation } from './src/navigation/navigation';

const App = () => {
  useEffect(() => {
    (async () => {
      await countersStorageHelper.save([
        // { id: '1', name: 'Counter 1', count: 8 },
        // { id: '2', name: 'Counter 2', count: 12 },
        // { id: '3', name: 'Counter 3', count: 1 },
        // { id: '4', name: 'Counter 4', count: 25 },
        // { id: '5', name: 'Counter 5', count: 13 },
        // { id: '6', name: 'Counter 6', count: 6 },
      ]);
    })();
  }, []);
  return <Navigation />;
};

export default App;
