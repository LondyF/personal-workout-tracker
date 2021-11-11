import React from 'react';

import { Box, Text } from '@src/components';

interface WorkoutOverviewScreenProps {
  workout: Workout;
}

const WorkoutOverviewScreen: React.FC<WorkoutOverviewScreenProps> = React.memo(({ workout }) => {
  return (
    <Box flex={1}>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb="l">
        <Text variant="h2">Workout Overview</Text>
        <Text color="primaryPurple" fontFamily="Poppins-SemiBold">
          {workout.caloriesBurned} cal
        </Text>
      </Box>
      <Box flex={1}>
        {workout.exercisesPerMuscle.map((x) => (
          <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb="s">
            <Box flexDirection="row" alignItems="center">
              <Box
                width={10}
                height={10}
                backgroundColor="primaryPurple"
                borderRadius={10}
                shadowColor="black"
                shadowOpacity={0.8}
                mr="s"
                shadowOffset={{
                  width: 0,
                  height: 0,
                }}
                shadowRadius={1}
              />
              <Box>
                <Text variant="h3" fontSize={16}>
                  {x.targetMuscle}
                </Text>
                <Text variant="b1" color="lightGray" fontFamily="Poppins-Regular">
                  12 sets & 120 reps in total
                </Text>
              </Box>
            </Box>
            <Box>
              <Text variant="h3" fontFamily="Poppins-Bold">
                {
                  x.exercises[x.exercises.length - 1].sets[
                    x.exercises[x.exercises.length - 1].sets.length - 1
                  ].weight
                }
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

export default WorkoutOverviewScreen;
