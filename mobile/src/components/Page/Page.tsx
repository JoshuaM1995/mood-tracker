import { Box } from 'native-base';
import React from 'react';

export const Page: React.FC = ({ children }) => {
  return (
    <Box bg="#FCFCFE" padding={4} flex={1} height="100%" width="100%">
      {children}
    </Box>
  );
};
