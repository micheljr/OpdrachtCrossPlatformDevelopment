import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../styles/theme';
import BookList from '../screens/BookList';
import BookDetails from '../screens/BookDetails';

const Stack = createNativeStackNavigator();

function BookNavigator() {
  const thema = localStorage.getItem('theme') || 'light';
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoekenOverzicht"
        component={BookList}
        options={{
          title: 'Boekenoverzicht',
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
        name="BookDetails"
        component={BookDetails}
        options={{
          title: 'Boekdetails',
          headerStyle: { backgroundColor: theme.PRIMARY_COLOR },
          headerTitleStyle: { color: 'white' },
          headerBackTitle: '',
          headerBackTitleStyle: { color: 'white' },
        }}
      />
    </Stack.Navigator>
  );
}

export default BookNavigator;
