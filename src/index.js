import React from 'react';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';
import Colors from '~/config/ColorsConfig';
import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor={Colors.purple_primary}
    />
    <Routes />
  </>
);

export default App;
