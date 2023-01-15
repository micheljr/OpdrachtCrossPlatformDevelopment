import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const OneButton = ({ children, onPressed, height = '75px', thema }) => (
  <TouchableHighlight
    style={[styles.button, thema === 'light' ? styles.light : styles.dark]}
    onPress={onPressed}
    height={height}
  >
    <Text style={styles.textColor}>{children}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
    height: 75,
  },
  textColor: {
    color: 'white',
    fontSize: theme.FONT_SIZE_XLARGE,
  },
  light: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
  dark: {
    backgroundColor: theme.DARK_PRIMARY_COLOR,
  },
});

export default OneButton;
