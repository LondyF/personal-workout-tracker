import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '@features/Dashboard/screens/dashboard-screen';

import { WorkoutStack } from './';

const RootNavigator = createStackNavigator();

const RootStack: React.FC = () => {
  return (
    <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigator.Screen component={DashboardScreen} name="Home" />
      <RootNavigator.Screen component={WorkoutStack} name="Workout" />
    </RootNavigator.Navigator>
  );
};

export default RootStack;
