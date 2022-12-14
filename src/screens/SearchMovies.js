import React, { Component } from "react";
import { View, Text, ActivityIndicator, TextInput } from 'react-native';
import OneButton from "../components/OneButton";
import { getData } from '../utils/OneApi';
import theme from '../styles/theme'
import Warning from '../components/Warning';

class SearchMovies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: 'movie',
            isLoading: false,
            message: '',
            theme: localStorage.getItem('theme') || 'light'
        }

        this.onButtonPressed = this.onButtonPressed.bind(this);
    }

    onButtonPressed() {
        this.setState({ isLoading: true, message: '' })

        if (this.state.movie !== 'movie') this.state.movie = 'movie/' + this.state.movie;
        console.log(this.state.movie);

        getData(this.state.movie)
            .then((res) => {
                this.handleResponse(res);
            })
            .catch((err) => {
                this.setState({
                    isLoading: false,
                    message: `Error bij het ophalen van de data: ${err}`
                });
            });
    }

    handleResponse(response) {
        this.setState({ isLoading: false })

        if (response.docs && response.docs.length > 0) {
            this.props.navigation.navigate('Details', {
              movies: response.docs,
            });
          } else if (response.docs) {
            this.setState({ message: 'Geen films gevonden.' });
          } else {
            this.setState({ message: 'Ongeldige filmnaam opgegeven!' });
          }
    }

    render() {
        const spinner = this.state.isLoading ? (
            <View style={{ marginTop: 20 }}>
              <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
            </View>
        ) : null;

        return (
            <View>
                <Text >Geef een filmtitel op en zoek:</Text>
                <View >
                    <TextInput
                        placeholder="Geef een filmtitel op"
                        onChangeText={(text) => {
                            this.setState({ movie: text });
                        }}
                    />
                </View>
                <OneButton onPressed={this.onButtonPressed}>Zoek!</OneButton>
                {spinner}
                <Warning>{this.state.message}</Warning>
            </View>
        );
    }
}

export default SearchMovies;