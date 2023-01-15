import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import theme from '../styles/theme';

class MovieListItem extends Component {
  onPress = () => {
    this.props.onPressItem();
  };

  render() {
    const { name, rottenTomatoesScore } = this.props.item;
    const { button, textContainer, title, image } = styles;
    return (
      <TouchableHighlight
        style={button}
        onPress={this.onPress}
        underlayColor="#dddddd"
      >
        <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
          <Image resizeMode={'cover'} source={imageUri(name)} style={image} />
          <View style={textContainer}>
            <Text style={title}>{name}</Text>
            <Text style={{ fontSize: theme.FONT_SIZE }}>
              Score: {Math.round(rottenTomatoesScore)}%
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

function imageUri(uri) {
  const name = uri.toLowerCase().replace(/\s+/g, '');

  switch (name) {
    case 'thebattleofthefivearmies':
      return require('../../assets/thebattleofthefivearmies.png');
    case 'thedesolationofsmaug':
      return require('../../assets/thedesolationofsmaug.jpg');
    case 'thefellowshipofthering':
      return require('../../assets/thefellowshipofthering.jpg');
    case 'thereturnoftheking':
      return require('../../assets/thereturnoftheking.jpg');
    case 'thetwotowers':
      return require('../../assets/thetwotowers.jpg');
    case 'theunexpectedjourney':
      return require('../../assets/theunexpectedjourney.jpg');
    default:
      return require('../../assets/favicon.png');
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 100,
  },
  title: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  image: {
    flex: 1,
    height: '100%',
    borderRadius: 5,
    marginRight: 10,
  },
});

export default MovieListItem;
