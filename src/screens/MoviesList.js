import { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import Separator from '../components/Separator';
import BookListItem from '../components/MovieListItem';
import { getData } from "../utils/OneApi";
import theme from '../styles/theme';

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
        //this.movies = props.route.params.movies;
    }

    async handleMovies() {
        await getData('movie')
            .then((res) => {
                this.setState({
                    movies: res.docs
                });
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(this.state.movies);
    }

    onPressItem = index => {
        console.log(`Pressed row: ${index}`);
        const selectedBook = this.state.movies[index];

        console.log(selectedBook);
    }

    Separator = () => <Separator />
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => (
        <BookListItem item={item} onPressItem={() => this.onPressItem(index)} />
    );
    ListEmptyComponent = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <ActivityIndicator size="large" color={ theme.PRIMARY_COLOR } />
            </View>
        );
    }

    componentDidMount() {
        this.handleMovies();
    }

    render() {
        return (
            <FlatList
                data={this.state.movies}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.Separator}
                ListEmptyComponent={this.ListEmptyComponent}
            />
        )
    }
}

export default MoviesList;