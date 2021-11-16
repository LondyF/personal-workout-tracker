import React from 'react';

import { Box } from '@src/components';

import GroupHeader from '../components/groupHeader';
import ExerciseBlock from '../components/exerciseBlock';

interface WorkoutExercisesScreenProps {
  workout: Workout;
}

const WorkoutExercisesScreen: React.FC<WorkoutExercisesScreenProps> = React.memo(({ workout }) => {
  return (
    <Box flex={1}>
      {workout.exercisesPerMuscle.map((group, i) => (
        <Box>
          <GroupHeader targetMuscle={group.targetMuscle} groupNumber={i + 1} />
          {group.exercises.map((exercise) => (
            <ExerciseBlock exerciseName={exercise.name} />
          ))}
        </Box>
      ))}
    </Box>
  );
});

export default WorkoutExercisesScreen;
