import { useRoute } from '@react-navigation/native';
import { Box, Text } from 'native-base';
import React from 'react';

export const Page: React.FC = ({ children }) => {
  const route = useRoute();

  return (
    <Box bg="#FCFCFE" padding="15px 10px" flex={1}>
      <Text fontWeight="bold" fontSize="2xl" marginBottom={6}>
        {route.name}
      </Text>

      {children}
    </Box>
  );
};
