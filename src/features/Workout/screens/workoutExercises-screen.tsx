import React from 'react';

import { Box, Text } from '@src/components';

const WorkoutExercisesScreen: React.FC = React.memo(() => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Exercises :)</Text>
    </Box>
  );
});

export default WorkoutExercisesScreen;
