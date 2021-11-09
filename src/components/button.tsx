import React from 'react';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';

import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BoxProps,
  BackgroundColorProps,
  createVariant,
  VariantProps,
  createRestyleComponent,
} from '@shopify/restyle';

import { Text } from '@src/components';
import { Theme } from '@styles/theme';

const buttonVariant = createVariant({ themeKey: 'buttonVariants' });
const restyleFunctions = [buttonVariant as any, spacing, border, backgroundColor];

interface ButtonProps
  extends SpacingProps<Theme>,
    BorderProps<Theme>,
    BackgroundColorProps<Theme>,
    VariantProps<Theme, 'buttonVariants'> {
  text: string;
  isLoading?: boolean;
  onPress: () => void;
}

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof View> & BoxProps<Theme>,
  Theme
>([buttonVariant], View);

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  isLoading = false,
  variant = 'primary',
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, { ...rest, variant });
  const textVariant = ('button_' + variant) as Partial<
    keyof Omit<Theme['textVariants'], 'defaults'>
  >;

  return (
    <TouchableOpacity disabled={isLoading} onPress={onPress}>
      <ButtonContainer {...props}>
        {!isLoading ? (
          <Text textAlign="center" variant={textVariant}>
            {text}
          </Text>
        ) : (
          <ActivityIndicator />
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
