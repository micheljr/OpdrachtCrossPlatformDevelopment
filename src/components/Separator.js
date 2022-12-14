import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});

export default Separator;
