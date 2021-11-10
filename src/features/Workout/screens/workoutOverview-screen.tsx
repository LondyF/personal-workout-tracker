import React from 'react';

import { Box, Text } from '@src/components';

const WorkoutOverviewScreen: React.FC = React.memo(() => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Overview :)</Text>
    </Box>
  );
});

export default WorkoutOverviewScreen;
