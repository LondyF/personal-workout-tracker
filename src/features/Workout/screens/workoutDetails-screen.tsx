import React from 'react';

import { Box, Text } from '@src/components';

const WorkoutDetailsScreen: React.FC = React.memo(() => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Details :)</Text>
    </Box>
  );
});

export default WorkoutDetailsScreen;
