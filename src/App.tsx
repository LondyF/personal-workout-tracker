import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';

import theme from './styles/theme';

import { RootStack } from './navigations';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
