import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from '../styles/theme';
import React from "react";
import MoviesList from "../screens/MoviesList";
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

function MovieNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="MovieOverzicht"
                    component={MoviesList}
                    options={{
                        title: `Filmoverzicht`,
                        headerStyle: { backgroundColor: theme.PRIMARY_COLOR },
                        headerTitleStyle: { color: 'white'},
                    }}
                />
                <Stack.Screen 
                    name="MovieDetails"
                    component={MovieDetails}
                    options={{
                        title: `Details:`,
                        headerStyle: { backgroundColor: theme.PRIMARY_COLOR },
                        headerTitleStyle: { color: 'white' }
                    }}
                />
            </Stack.Navigator>
    );
}

export default MovieNavigator;