import { Button } from 'native-base';
import React, { PropsWithChildren } from 'react';

type OnboardingScreenButtonProps = {
  onPress: () => void;
};

export function OnboardingScreenButton({
  onPress,
  children,
}: PropsWithChildren<OnboardingScreenButtonProps>) {
  return (
    <Button
      onPress={onPress}
      width="100%"
      borderRadius="full"
      color="#fff"
      bg="purple.400"
      _pressed={{ bg: 'purple.500' }}
      marginTop={12}
      padding={4}
    >
      {children}
    </Button>
  );
}
