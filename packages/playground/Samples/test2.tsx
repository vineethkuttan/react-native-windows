import React, { useState } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    width:1000,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

const MyTextComponent2 = () => {
  return (
    <View style={styles.container}>
            <Text numberOfLines={1} adjustsFontSizeToFit={false} style={styles.welcome}>Welcome to Bin Nin Native!Welcome to Bin Nin Native!Welcome to Bin Nin Native!Welcome to Bin Nin Native!</Text>
    </View>
  );
};

export default MyTextComponent2;
