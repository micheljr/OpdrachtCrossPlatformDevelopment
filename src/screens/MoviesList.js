import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import Separator from '../components/Separator';
import MovieListItem from '../components/MovieListItem';
import { getData } from '../utils/OneApi';
import theme from '../styles/theme';
import Searchbar from '../components/Searchbar';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: [],
      theme: localStorage.getItem('theme') || 'light',
    };
  }

  componentDidMount() {
    this.handleMovies();
  }

  onPressItem = (index) => {
    //console.log(`Pressed row: ${index}`);
    const selectedMovie = this.state.filteredMovies[index];

    this.props.navigation.navigate('Films', {
      screen: 'MovieDetails',
      initial: false,
      params: { movieId: selectedMovie._id },
    });
  };

  onChange = (text) => {
    this.setState({
      filteredMovies: this.state.movies.filter((m) =>
        m.name.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  async handleMovies() {
    await getData('movie')
      .then((res) => {
        this.setState({
          movies: res.docs,
          filteredMovies: res.docs,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  Separator = () => <Separator />;
  keyExtractor = (item, index) => index.toString();
  ListEmptyComponent = () => (
    <View style={{ marginTop: 20 }}>
      <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
    </View>
  );
  renderItem = ({ item, index }) => (
    <MovieListItem item={item} onPressItem={() => this.onPressItem(index)} />
  );

  render() {
    return (
      <View style={{}}>
        <Searchbar onChange={this.onChange} />
        <FlatList
          data={this.state.filteredMovies}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.Separator}
          ListEmptyComponent={this.ListEmptyComponent}
        />
      </View>
    );
  }
}

export default MoviesList;
