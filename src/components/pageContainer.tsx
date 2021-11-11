import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Box } from '.';

const PageContainer: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.flex}>
      <Box flex={1} paddingHorizontal="xl" paddingVertical="xl">
        {children}
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default PageContainer;
