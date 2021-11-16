import React from 'react';

import { Box, Text } from '@src/components';

interface ExerciseBlockProps {
  exerciseName: string;
}

const ExerciseBlock: React.FC<ExerciseBlockProps> = ({ exerciseName }) => {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box width={50} height={50} borderRadius={5} backgroundColor="primaryPurple" />
      <Box>
        <Box width={20} height={6} backgroundColor="primaryPurple" style={{ marginBottom: 2 }} />
        <Text variant="b1" fontFamily="Poppins-Bold" style={{ marginBottom: -3 }}>
          {exerciseName}
        </Text>
        <Text variant="b1" fontSize={9.6} color="gray">
          10 x 120 lb - 10 x 125 lb - 10 x 130 lb
          <Text color="primaryPurple" fontFamily="Poppins-Bold">
            {' '}
            - 10 x 130 lb
          </Text>
        </Text>
      </Box>
      <Box width={10} height={10} backgroundColor="gray" />
    </Box>
  );
};

export default ExerciseBlock;
