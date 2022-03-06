import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, theme } from 'native-base';
import React, { useState } from 'react';
import { BottomTabs } from './src/components/BottomTabs';
import { useAsyncEffect } from './src/hooks/useAsyncEffect';
import { OnboardingScreen } from './src/screens/OnboardingScreen';

export const App = () => {
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
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      ) : (
        <OnboardingScreen completeOnboarding={completeOnboarding} />
      )}
    </NativeBaseProvider>
  );
};

export default App;
