import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const OneButton = ({ children, onPressed, height = '75px' }) => (
  <TouchableHighlight style={styles.button} onPress={onPressed} height={height}>
    <Text style={styles.textColor}>{children}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
    height: 75,
  },
  textColor: {
    color: 'white',
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default OneButton;
