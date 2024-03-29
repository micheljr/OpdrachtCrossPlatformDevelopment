import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import theme from '../styles/theme';

function BookListItem({ item, onPressItem }) {
  const { name } = item;

  function onPress() {
    onPressItem();
  }

  const textContainer = {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  };
  const button = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 100,
  };
  const title = {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
  };
  const image = {
    flex: 1,
    height: '100%',
    borderRadius: 5,
    marginRight: 10,
  };

  return (
    <TouchableHighlight
      style={button}
      onPress={onPress}
      underlayColor="#dddddd"
    >
      <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
        <Image resizeMode={'cover'} source={imageUri(name)} style={image} />
        <View style={textContainer}>
          <Text style={title}>{name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
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

export default BookListItem;
