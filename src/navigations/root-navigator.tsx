import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '@features/Dashboard/screens/dashboard-screen';

const RootNavigator = createStackNavigator();

const RootStack: React.FC = () => {
  return (
    <RootNavigator.Navigator>
      <RootNavigator.Screen component={DashboardScreen} name="Home" />
    </RootNavigator.Navigator>
  );
};

export default RootStack;
