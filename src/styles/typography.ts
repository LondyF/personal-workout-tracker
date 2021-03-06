import { TextStyle } from 'react-native';

export default {
  defaults: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  h1: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 28,
  },
  h2: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 20,
  },
  h3: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 14,
  },
  b1: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 13,
  },
  button_primary: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  button_outline: {
    fontFamily: 'Poppins-Bold',
    color: 'primaryPurple',
  },
} as Record<string, TextStyle>;
