import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';

import { SceneMap, TabView } from 'react-native-tab-view';

import { PageContainer, TabBar } from '@src/components';
import { MuscleGroups } from '@enums/muscleGroups';

import Header from '../components/header';

import WorkoutDetailsScreen from './workoutDetails-screen';
import WorkoutExercisesScreen from './workoutExercises-screen';
import WorkoutOverviewScreen from './workoutOverview-screen';

const WORKOUT: Workout = {
  id: 0,
  dateCreated: new Date(),
  date: new Date(),
  caloriesBurned: 1311,
  muscleGroups: [],
  unit: 'lb',
  exercisesPerMuscle: [
    {
      targetMuscleId: 0,
      targetMuscle: 'Chest',
      exercises: [
        {
          targetMuscle: 0,
          name: 'Bench Press',
          sets: [
            {
              reps: 10,
              weight: 100,
              isPersonalRecord: false,
            },
            {
              reps: 10,
              weight: 100,
              isPersonalRecord: false,
            },
            {
              reps: 10,
              weight: 100,
              isPersonalRecord: false,
            },
          ],
          pr: '10',
        },
      ],
    },
    {
      targetMuscleId: 0,
      targetMuscle: 'Back',
      exercises: [
        {
          targetMuscle: 0,
          name: 'Bench Press',
          sets: [
            {
              reps: 10,
              weight: 100,
              isPersonalRecord: false,
            },
            {
              reps: 10,
              weight: 100,
              isPersonalRecord: false,
            },
            {
              reps: 10,
              weight: 100,
              isPersonalRecord: false,
            },
          ],
          pr: '10',
        },
      ],
    },
  ],
};

const routes = [
  { key: 'overview', title: 'Overview' },
  { key: 'exercises', title: 'Exercises' },
  { key: 'details', title: 'Details' },
];

const renderScene = SceneMap({
  overview: () => <WorkoutOverviewScreen workout={WORKOUT} />,
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
