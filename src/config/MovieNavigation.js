import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from '../styles/theme';
import React from "react";
import MoviesList from "../screens/MoviesList";
import SearchMovies from "../screens/SearchMovies";

const Stack = createNativeStackNavigator();

function MovieNavigator() {
    return (
        
            <Stack.Navigator>
                <Stack.Screen 
                    name="Zoeken"
                    component={SearchMovies}
                    options={{
                        title: 'Films - zoek een film',
                        headerStyle: { backgroundColor: theme.PRIMARY_COLOR },
                        headerTitleStyle: { color: 'white'},
                    }}
                />
                <Stack.Screen 
                    name="Details"
                    component={MoviesList}
                    options={({ route }) => ({
                        title: `Resultaten: (${route.params.movies.length})`,
                        headerStyle: { backgroundColor: theme.PRIMARY_COLOR },
                        headerTitleStyle: { color: 'white' }
                    })}
                />
            </Stack.Navigator>
    );
}

export default MovieNavigator;