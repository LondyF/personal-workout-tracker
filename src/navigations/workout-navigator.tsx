import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WorkoutDetailScreen from '@features/Workout/screens/workoutDetail-screen';

const WorkoutNavigator = createStackNavigator();

const WorkoutStack: React.FC = () => {
  return (
    <WorkoutNavigator.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutNavigator.Screen component={WorkoutDetailScreen} name="WorkoutDetail" />
    </WorkoutNavigator.Navigator>
  );
};

export default WorkoutStack;
