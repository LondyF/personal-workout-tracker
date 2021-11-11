import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Box } from '.';

const PageContainer: React.FC = ({ children }) => {
  return (
    <Box paddingHorizontal="xl" paddingVertical="xl" flex={1}>
      <SafeAreaView style={styles.flex}>{children}</SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default PageContainer;
