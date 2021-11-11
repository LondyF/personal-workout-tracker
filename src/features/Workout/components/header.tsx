import React from 'react';

import { Box, Text } from '@src/components';
import { MuscleGroups } from '@enums/muscleGroups';
import constants from '@src/constants';

interface HeaderProps {
  muscleGroups: MuscleGroups[];
}

const Header: React.FC<HeaderProps> = ({ muscleGroups }) => {
  const muscleGroupsLabels = muscleGroups.map(
    (x) => constants.MUSCLE_GROUPS.find((y) => y.id === x)?.name,
  );

  const today = String(new Date().getDate()).padStart(2, '0');

  const muscleGroupsAmount = muscleGroupsLabels.length;

  return (
    <Box flexDirection="row">
      <Box flex={0.8}>
        <Text
          lineHeight={32.5}
          textTransform="capitalize"
          fontFamily="Poppins-SemiBold"
          color="primaryPurple"
          fontSize={28}>
          {/* TODO: Definitely Recfacor this, maybe use reduce?  */}
          {muscleGroupsLabels[0]}
          {muscleGroupsAmount > 1 ? (muscleGroupsAmount >= 2 ? ' & \n' : ', \n') : ''}
          {muscleGroupsAmount > 1 && (
            <Text fontFamily="Poppins-Regular" color="black" fontSize={26}>
              {muscleGroupsLabels
                .splice(1)
                .map((x, i) => `${x + (i === muscleGroupsAmount - 2 ? '' : ' & ')}`)}
            </Text>
          )}
        </Text>
      </Box>
      <Box
        borderLeftColor="lightGray"
        justifyContent="center"
        flex={0.2}
        alignItems="center"
        borderLeftWidth={1}>
        <Text variant="b1" fontFamily="Poppins-SemiBold" color="lightGray">
          Nov
        </Text>
        <Text fontFamily="Poppins-Regular" color="black" fontSize={26}>
          {today}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
