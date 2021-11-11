import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';

import { SceneMap, TabView } from 'react-native-tab-view';

import { PageContainer, TabBar } from '@src/components';
import { MuscleGroups } from '@enums/muscleGroups';

import Header from '../components/header';

import WorkoutDetailsScreen from './workoutDetails-screen';
import WorkoutExercisesScreen from './workoutExercises-screen';
import WorkoutOverviewScreen from './workoutOverview-screen';

const routes = [
  { key: 'overview', title: 'Overview' },
  { key: 'exercises', title: 'Exercises' },
  { key: 'details', title: 'Details' },
];

const renderScene = SceneMap({
  overview: () => <WorkoutOverviewScreen />,
  exercises: () => <WorkoutExercisesScreen />,
  details: () => <WorkoutDetailsScreen />,
});

const WorkoutDetailScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  return (
    <PageContainer>
      <Header muscleGroups={[MuscleGroups.Chest, MuscleGroups.Back, MuscleGroups.Shoulders]} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={(props) => (
          <TabBar {...props} selectedIndex={index} onIndexChange={setIndex} />
        )}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </PageContainer>
  );
};

export default WorkoutDetailScreen;
