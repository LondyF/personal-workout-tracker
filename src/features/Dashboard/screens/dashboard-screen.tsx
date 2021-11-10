import React from 'react';
import { Alert } from 'react-native';

import { Button, Box, Text } from '@src/components';

const DashboardScreen: React.FC = ({ navigation }) => {
  return (
    <Box flexDirection="column" flex={1}>
      <Box borderRadius={20} p="xl" m="s">
        <Text variant="b1">Thisss should besss a dashboard</Text>
        <Button
          variant="primary"
          text="Copy Workout"
          onPress={() => navigation.navigate('Workout')}
        />
      </Box>
    </Box>
  );
};

export default DashboardScreen;
