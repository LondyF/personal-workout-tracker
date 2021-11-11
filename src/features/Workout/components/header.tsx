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

  const muscleGroupsAmount = muscleGroupsLabels.length;

  return (
    <Box>
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
          <Text fontFamily="Poppins-Regular" color="black" fontSize={28}>
            {muscleGroupsLabels
              .splice(1)
              .map((x, i) => `${x + (i === muscleGroupsAmount - 2 ? '' : ' & ')}`)}
          </Text>
        )}
      </Text>
    </Box>
  );
};

export default Header;
