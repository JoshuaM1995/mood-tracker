import { RouteProp } from '@react-navigation/native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

type TabBarIconProps = {
  route: RouteProp<any>;
  focused: boolean;
  color: string;
};

export const TabBarIcon = ({ route, focused, color }: TabBarIconProps) => {
  let iconName = '';

  console.log('TabBarIcon', { color });

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-alt';
  } else if (route.name === 'Stats') {
    iconName = focused ? 'chart-bar' : 'chart-bar-alt';
  }

  return <FontAwesome5Icon name={iconName} size={20} color={color} light />;
};
