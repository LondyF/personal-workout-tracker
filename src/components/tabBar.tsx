import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationState, SceneRendererProps, Route } from 'react-native-tab-view';

import { Box, Text } from '.';

type State = NavigationState<Route>;

interface TabBarProps extends SceneRendererProps {
  navigationState: State;
  selectedIndex: number;
  onIndexChange: Dispatch<SetStateAction<number>>;
}

const TabBar: React.FC<TabBarProps> = ({ navigationState, selectedIndex, onIndexChange }) => {
  return (
    <View style={styles.tabBar}>
      {navigationState.routes.map((route, i) => {
        let isSelected = selectedIndex === i;

        return (
          <TouchableOpacity onPress={() => onIndexChange(i)}>
            <Box
              backgroundColor={isSelected ? 'primaryPurpleOpacity' : 'white'}
              borderRadius={5}
              alignItems="center"
              width={100}
              paddingVertical="s">
              <Text
                fontFamily="Poppins-SemiBold"
                color={isSelected ? 'primaryPurple' : 'lightGray'}>
                {route.title}
              </Text>
            </Box>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
  },
});

export default TabBar;
