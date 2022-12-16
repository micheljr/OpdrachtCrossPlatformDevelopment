import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import MovieListItem from '../components/MovieListItem';
import { getData } from "../utils/OneApi";
import theme from '../styles/theme'

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {},
            isLoading: true
        };
    }

    onPressItem = () => {
        console.log(`Pressed item`);
    }

    async handleMovie() {
        await getData(`movie/${this.props.route.params.movieId}`)
            .then((res) => {
                this.setState({
                    movie: res.docs[0],
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(this.state.movie);
    }

    componentDidMount() {
        this.handleMovie();
    }

    render() {
        const content = this.state.isLoading ? (
            <View style={{ marginTop: 20 }}>
              <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
            </View>
        ) : (
        <View>
            <Text>{`Titel: ${this.state.movie.name}`}</Text>
            <Text>{`Score op rottentomatoes: ${this.state.movie.rottenTomatoesScore}`}</Text>
            <Text>{`Academy award nominaties: ${this.state.movie.academyAwardNominations} waarvan gewonnen: ${this.state.movie.academyAwardWins}`}</Text>
            <Text>{`Budget (in miljoen €): ${this.state.movie.budgetInMillions}`}</Text>
            <Text>{`Opbrengst (in miljoen €): ${this.state.movie.boxOfficeRevenueInMillions}`}</Text>
            <Text>{`Speeltijd: ${this.state.movie.runtimeInMinutes}`}</Text>
        </View>
        );

        return(
            <View>
                {content}
            </View>
            //<MovieListItem item={this.state.movie} onPressItem={() => this.onPressItem()} />
        );
    }
}

export default MovieDetails;