import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen';
import SoldScreen from '../screens/SoldScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useThemeContext } from '../theme/ThemeProvider';

const Tab = createBottomTabNavigator();
const { height: screenHeight } = Dimensions.get('window');
const TAB_BAR_HEIGHT = screenHeight < 700 ? 55 : 65;

export default function BottomTabNavigator() {
  const { colors } = useThemeContext(); // ✅ Hook now inside component

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Service':
              iconName = 'construct';
              break;
            case 'Sold':
              iconName = 'pricetag';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: TAB_BAR_HEIGHT,
          paddingBottom: Platform.OS === 'android' ? 8 : 20,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: true, headerTitle: 'Pulse Technology' }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: true, headerTitle: 'Sold Products' }}
        name="Sold"
        component={SoldScreen}
      />
      <Tab.Screen name="Service" component={ServiceScreen} />
      <Tab.Screen
        options={{ headerShown: true, headerTitle: 'Settings' }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}