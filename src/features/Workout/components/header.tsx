import React from 'react';

import { Box, Text } from '@src/components';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box>
      <Text lineHeight={32.5} fontFamily="Poppins-SemiBold" color="primaryPurple" fontSize={28}>
        Chest, {'\n'}
        <Text fontFamily="Poppins-Regular" color="black" fontSize={28}>
          Back & Biceps
        </Text>
      </Text>
    </Box>
  );
};

export default Header;
