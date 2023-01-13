import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Test2 from '../components/Test2';
import Home from '../screens/Home';
import MovieNavigator from './MovieNavigation';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
    // screenOptions={{ unmountOnBlur: true }}
    // initialRouteName="MovieOverzicht"
    >
      <Tab.Screen
        name="Films"
        component={MovieNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Films',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Boeken"
        component={Test2}
        options={{
          tabBarLabel: 'Boeken',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <HomeScreen.Navigator>
      <HomeScreen.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeScreen.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </HomeScreen.Navigator>
  );
}

const RootStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Root"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
