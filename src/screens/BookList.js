import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { getData } from '../utils/OneApi';
import Separator from '../components/Separator';
import theme from '../styles/theme';
import BookListItem from '../components/BookListItem';
import Searchbar from '../components/Searchbar';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      filteredBooks: [],
    };
  }

  componentDidMount() {
    this.handleBooks();
  }

  onPressItem = (index) => {
    //console.log(`Pressed row: ${index}`);
    const selectedBook = this.state.filteredBooks[index];

    this.props.navigation.navigate('Boeken', {
      screen: 'BookDetails',
      initial: false,
      params: { bookId: selectedBook._id },
    });
  };

  onChange = (text) => {
    this.setState({
      filteredBooks: this.state.books.filter((m) =>
        m.name.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  async handleBooks() {
    await getData('book')
      .then((res) => {
        this.setState({
          books: res.docs,
          filteredBooks: res.docs,
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
    <BookListItem item={item} onPressItem={() => this.onPressItem(index)} />
  );

  render() {
    return (
      <View>
        <Searchbar onChange={this.onChange} />
        <FlatList
          data={this.state.filteredBooks}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.Separator}
          ListEmptyComponent={this.ListEmptyComponent}
        />
      </View>
    );
  }
}

export default BookList;
