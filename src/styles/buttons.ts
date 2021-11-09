import { ViewStyle } from 'react-native';

const buttons = {
  defaults: {
    alignItems: 'center',
    justifyContent: 'center',
    p: 'm',
    borderRadius: 5,
  },
  primary: {
    backgroundColor: 'primaryPurple',
  },
  outline: {
    borderWidth: 4,
    borderColor: 'primaryPurple',
  },
};

//TODO: look for a better way of doing this
export default buttons as Record<keyof typeof buttons, ViewStyle>;
