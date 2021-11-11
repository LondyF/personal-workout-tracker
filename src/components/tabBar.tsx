import { BoxProps } from '@shopify/restyle';
import { Theme } from '@src/styles/theme';
import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';

import { NavigationState, SceneRendererProps, Route } from 'react-native-tab-view';

import { Box, Text } from '.';

type State = NavigationState<Route>;

interface TabBarProps extends SceneRendererProps {
  navigationState: State;
  selectedIndex: number;
  tabBarStyle?: BoxProps<Theme>;
  onIndexChange: Dispatch<SetStateAction<number>>;
}

const TabBar: React.FC<TabBarProps> = ({
  navigationState,
  selectedIndex,
  tabBarStyle,
  onIndexChange,
}) => {
  return (
    <Box paddingVertical="xl" {...tabBarStyle} flexDirection="row" justifyContent="space-between">
      {navigationState.routes.map((route, i) => {
        let isSelected = selectedIndex === i;

        return (
          <TouchableOpacity key={i} onPress={() => onIndexChange(i)}>
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
    </Box>
  );
};

export default TabBar;
