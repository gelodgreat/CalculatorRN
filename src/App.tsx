import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppStack from 'navigator/AppNavigator';

const App = () => {
  return (
    <PaperProvider>
      <AppStack />
    </PaperProvider>
  );
};

export default App;
