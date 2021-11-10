import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';

import theme from './styles/theme';

import { RootStack } from './navigations';

const navigatorTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
