import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';

class Home extends Component {
  handleEnterPress = () => {
    this.props.navigation.navigate('Tabs');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require('../../assets/LordOfTheRings.jpg')}
          style={{ flex: 1 }}
        />
        <Button title="Enter" onPress={this.handleEnterPress} />
      </View>
    );
  }
}

export default Home;
