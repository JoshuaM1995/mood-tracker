import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { useTheme } from 'native-base';
import React, { useCallback } from 'react';
import { BottomTabRoute } from '../../enums/navigation';
import { HomeScreen } from '../../screens/HomeScreen';
import { StatsScreen } from '../../screens/StatsScreen';
import { TabBarIcon } from '../TabBarIcon';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const {
    colors: { purple, indigo },
  } = useTheme();

  const getTabBarIcon = useCallback((route: RouteProp<any>) => {
    // eslint-disable-next-line react/display-name
    return (focused: boolean, color: string) => (
      <TabBarIcon route={route} focused={focused} color={color} />
    );
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={BottomTabRoute.Home}
      screenOptions={({ route }) => ({
        tabBarIcon: getTabBarIcon(route),
        tabBarActiveTintColor: purple[400],
        tabBarInactiveTintColor: indigo[500],
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={BottomTabRoute.Home} component={HomeScreen} />
      <Tab.Screen name={BottomTabRoute.Stats} component={StatsScreen} />
    </Tab.Navigator>
  );
};
