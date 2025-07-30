import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import your screen components
import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen';

// Create the tab navigator
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
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
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{headerShown:true, headerTitle:"Pulse Technology"}} name="Home" component={HomeScreen} />
      <Tab.Screen name="Service" component={ServiceScreen} />
    </Tab.Navigator>
  );
}
