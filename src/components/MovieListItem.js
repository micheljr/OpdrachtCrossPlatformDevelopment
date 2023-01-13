import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

class MovieListItem extends Component {
  onPress = () => {
    this.props.onPressItem();
  };

  render() {
    const { name, rottenTomatoesScore } = this.props.item;
    return (
      <TouchableHighlight onPress={this.onPress} underlayColor="#dddddd">
        <View>
          <Text>{name}</Text>
          <Text>score: {rottenTomatoesScore}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default MovieListItem;
