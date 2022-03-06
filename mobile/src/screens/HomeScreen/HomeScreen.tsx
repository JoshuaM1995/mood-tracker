import { Center, Image, Text } from 'native-base';
import React from 'react';
import { Page } from '../../components/Page';
import bannerHappyImage from '../../../assets/images/home/banner-happy.png';

export const HomeScreen = () => {
  return (
    <Page>
      <Center>
        <Image source={bannerHappyImage} alt="Placeholder" />

        <Text color="orange.600" fontWeight="bold" fontSize="2xl">
          You feel great today
        </Text>
      </Center>
    </Page>
  );
};
