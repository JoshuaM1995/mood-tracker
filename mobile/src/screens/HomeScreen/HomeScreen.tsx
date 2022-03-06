import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import bannerHappyImage from '../../../assets/images/home/banner-happy.png';
import { Page } from '../../components/Page';

export const HomeScreen = () => {
  return (
    <Page>
      <Center>
        <Image source={bannerHappyImage} alt="Placeholder" />

        <Heading color="orange.600" fontWeight="bold" fontSize="2xl" marginY={4}>
          You feel great today
        </Heading>
      </Center>

      <HStack marginTop={4} paddingX={6} space="lg" height="100%">
        <Box>
          <VStack>
            <Text color="gray.500" fontSize={14}>
              Jun
            </Text>
            <Text fontWeight="bold" fontSize={20}>
              20
            </Text>
          </VStack>
        </Box>

        <Box bg="#FFF8F0" width="90%" height={100} borderRadius="xl" shadow={3} padding={2}>
          <VStack>
            <Text fontWeight="bold">18:35</Text>
            <Heading fontSize="lg" color="orange.600">
              Happy
            </Heading>
          </VStack>

          <Flex justifyContent="flex-end" height="50%">
            <Badge colorScheme="orange" borderRadius="md" alignSelf="flex-start">
              Movies
            </Badge>
          </Flex>
        </Box>

        <Text>I am here</Text>

        <Divider bg="#fff" my={2} marginTop={8} />

        <Text>Testing</Text>
      </HStack>
    </Page>
  );
};
