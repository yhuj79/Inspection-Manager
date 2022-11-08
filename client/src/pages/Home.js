/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspection Manager</Text>
      <Text style={{fontSize: 20, margin: 5}}>1.0.0</Text>
      <Image
        source={require('../assets/reactnative.png')}
        style={{width: 350, height: 200, margin: 30}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
