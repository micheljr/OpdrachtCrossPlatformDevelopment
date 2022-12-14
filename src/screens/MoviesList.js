import { Component } from "react";
import { FlatList } from "react-native";
import Separator from '../components/Separator';
import BookListItem from '../components/MovieListItem';

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.movies = props.route.params.movies;
    }

    onPressItem = index => {
        console.log(`Pressed row: ${index}`);
        const selectedBook = this.movies[index];

        console.log(selectedBook);
    }

    Separator = () => <Separator />
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, index }) => (
        <BookListItem item={item} onPressItem={() => this.onPressItem(index)} />
    );

    render() {
        return (
            <FlatList
                data={this.movies}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.Separator}
            />
        )
    }
}

export default MoviesList;