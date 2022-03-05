import { Box, Button, Image, Text } from 'native-base';
import React, { useRef } from 'react';
import { ImageURISource } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import onboardingMoonImage from '../../../assets/images/onboarding/moon.png';
import onboardingSunImage from '../../../assets/images/onboarding/sun.png';
import onboardingSun2Image from '../../../assets/images/onboarding/sun2.png';
import { OnboardingScreenButton } from './OnboardingScreenButton';

type OnboardingSlideItem = {
  index: number;
  key: number;
  title: string;
  text: string;
  image: ImageURISource;
};

type OnboardingScreenProps = {
  completeOnboarding: () => Promise<void>;
};

export function OnboardingScreen({ completeOnboarding }: OnboardingScreenProps) {
  const appIntroSliderRef = useRef<AppIntroSlider>(null);

  return (
    <AppIntroSlider<OnboardingSlideItem>
      ref={appIntroSliderRef}
      renderItem={({ item: { index, image, title, text } }) => (
        <Box bg="#FCFCFC" height="100%" padding={10} alignItems="center" justifyContent="center">
          <Image source={image} alt="Onboarding Image" width={300} height={300} />
          <Text fontSize="2xl" fontWeight="bold" color="#52627D">
            {title}
          </Text>
          <Text textAlign="center" marginTop={2}>
            {text}
          </Text>

          {index === slides.length - 1 ? (
            <OnboardingScreenButton onPress={async () => completeOnboarding()}>
              Done
            </OnboardingScreenButton>
          ) : (
            <OnboardingScreenButton onPress={() => appIntroSliderRef.current?.goToSlide(index + 1)}>
              Next
            </OnboardingScreenButton>
          )}
        </Box>
      )}
      data={slides}
      showSkipButton
      renderSkipButton={() => (
        <Button
          color="#fff"
          bg="red.400"
          borderRadius="full"
          _pressed={{ bg: 'red.500' }}
          onPress={async () => completeOnboarding()}
        >
          Skip
        </Button>
      )}
    />
  );
}

const slides: OnboardingSlideItem[] = [
  {
    index: 0,
    key: 1,
    title: 'Track Your Daily Moods',
    text: 'Keep track of your daily moods through a few simple taps.',
    image: onboardingSunImage,
  },
  {
    index: 1,
    key: 2,
    title: 'Control Your Moods',
    text: 'Control your mood over time: daily, weekly, monthly and all year around.',
    image: onboardingSun2Image,
  },
  {
    index: 2,
    key: 3,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: onboardingMoonImage,
  },
];
