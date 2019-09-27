import React from 'react';
import {StatusBar, View} from 'react-native';

import Routes from './routes';

const App = () => (
  <>
    <View>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    </View>
    <Routes />
  </>
);

export default App;
