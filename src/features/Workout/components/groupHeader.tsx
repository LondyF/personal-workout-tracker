import React from 'react';

import { Box, Text } from '@src/components';

interface GroupHeaderProps {
  targetMuscle: string;
  groupNumber: number;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ targetMuscle, groupNumber }) => {
  return (
    <Box>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant="h2">Group {groupNumber}</Text>
        <Text variant="b1" color="primaryPurple">
          {targetMuscle}
        </Text>
      </Box>
    </Box>
  );
};

export default GroupHeader;
