import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookList from '../screens/BookList';
import Home from '../screens/Home';
import MovieNavigator from './MovieNavigation';
import BookNavigator from './BookNavigation';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
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
        component={BookNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Boeken',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Opties',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
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
