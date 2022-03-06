import { ScrollView } from 'native-base';
import React from 'react';

export const ScrollablePage: React.FC = ({ children }) => {
  return (
    <ScrollView bg="#FCFCFE" padding={4} flex={1} height="100%" width="100%">
      {children}
    </ScrollView>
  );
};
