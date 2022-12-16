import React, { Component } from "react";
import { Text, View, ActivityIndicator, Image, StyleSheet } from "react-native";
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
    }

    componentDidMount() {
        this.handleMovie();
    }

    render() {
        const {
            name,
            _id: id,
            rottenTomatoesScore: score,
            academyAwardNominations: nominaties,
            academyAwardWins: awardWins,
            budgetInMillions: budget,
            boxOfficeRevenueInMillions: opbrengst,
            runtimeInMinutes: speeltijd
        } = this.state.movie;

        const { 
            contentContainer, 
            imageContainer, 
            textContainer, 
            nameTitle, 
            image 
        } = styles;

        const content = this.state.isLoading ? (
            <View style={{ marginTop: 20 }}>
              <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
            </View>
        ) : (
        <View style={ contentContainer }>
            <View style={ imageContainer }>
                <Image 
                    resizeMode={'cover'}
                    source={require(`../../assets/${name.toLowerCase().replace(/\s+/g, '')}.png`)}
                    style={ image }
                    onError={(error) => {
                        error.src = require('../../assets/favicon.png');
                        error.onError = null
                    }}
                />
            </View>
            <View style={ textContainer }>
                <Text style={ nameTitle }>{`${name}`}</Text>
                <Text>{`Score op rottentomatoes: ${score}`}</Text>
                <Text>{`Academy award nominaties: ${nominaties} waarvan gewonnen: ${awardWins}`}</Text>
                <Text>{`Budget (in miljoen €): ${budget}`}</Text>
                <Text>{`Opbrengst (in miljoen €): ${opbrengst}`}</Text>
                <Text>{`Speeltijd: ${Math.floor(speeltijd/60)} uur en ${speeltijd % 60} minuten`}</Text>
            </View>
        </View>
        );

        return(
            <View style={{ flex: 1}}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    nameTitle: {
        fontSize: theme.FONT_SIZE_XLARGE,
        fontWeight: 'bold',
        color: theme.PRIMARY_COLOR
    },
    image: {
        flex: 1,
        width: '50%',
        height: '100%',
        borderRadius: 5
    }
  });

export default MovieDetails;