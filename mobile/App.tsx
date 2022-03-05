import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Center,
  Code,
  Heading,
  HStack,
  Link,
  NativeBaseProvider,
  Switch,
  Text,
  theme,
  useColorMode,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import { useAsyncEffect } from './src/hooks/useAsyncEffect';
import { OnboardingScreen } from './src/screens/OnboardingScreen';

export function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useAsyncEffect(async () => {
    const hasOnboardingBeenCompleted = await AsyncStorage.getItem('hasCompletedOnboarding');
    setHasCompletedOnboarding(hasOnboardingBeenCompleted === 'true');
  }, []);

  useAsyncEffect(() => {
    AsyncStorage.setItem('hasCompletedOnboarding', hasCompletedOnboarding ? 'true' : 'false');
  }, [hasCompletedOnboarding]);

  const completeOnboarding = async () => {
    setHasCompletedOnboarding(true);
    await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
  };

  return (
    <NativeBaseProvider theme={theme}>
      {hasCompletedOnboarding ? (
        <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
          <VStack space={5} alignItems="center">
            <NativeBaseIcon />
            <Heading size="lg">Welcome to NativeBase</Heading>
            <HStack space={2} alignItems="center">
              <Text>Edit</Text>
              <Code>App.tsx</Code>
              <Text>and save to reload.</Text>
            </HStack>
            <Link href="https://docs.nativebase.io" isExternal>
              <Text
                fontFamily="body"
                color="primary.500"
                underline
                fontSize="xl"
                fontWeight={100}
                fontStyle="italic"
              >
                Learn NativeBase
              </Text>
            </Link>
            <ToggleDarkMode />
          </VStack>
        </Center>
      ) : (
        <OnboardingScreen completeOnboarding={completeOnboarding} />
      )}
    </NativeBaseProvider>
  );
}

export default App;

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'}
      />
      <Text>Light</Text>
    </HStack>
  );
}
