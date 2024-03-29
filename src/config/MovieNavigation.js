import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../styles/theme';
import MoviesList from '../screens/MoviesList';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

function MovieNavigator() {
  const thema = localStorage.getItem('theme') || 'light';
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieOverzicht"
        component={MoviesList}
        options={{
          title: 'Filmoverzicht',
          headerStyle: {
            backgroundColor:
              thema === 'light'
                ? theme.PRIMARY_COLOR
                : theme.DARK_PRIMARY_COLOR,
          },
          headerTitleStyle: { color: 'white' },
          headerBackTitle: '',
          headerBackTitleStyle: { color: 'white' },
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          title: 'Filmdetails',
          headerStyle: { backgroundColor: theme.PRIMARY_COLOR },
          headerTitleStyle: { color: 'white' },
          headerBackTitle: '',
          headerBackTitleStyle: { color: 'white' },
        }}
      />
    </Stack.Navigator>
  );
}

export default MovieNavigator;
