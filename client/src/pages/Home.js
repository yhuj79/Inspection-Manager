/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function Logo(props) {
  let img =
    props.native === 'no'
      ? require('../assets/react.png')
      : require('../assets/reactnative.png');
  return (
    <View>
      <Image source={img} style={{width: 330, height: 200}} />
    </View>
  );
}

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspection Manager</Text>
      <Text style={{marginBottom: 30, fontSize: 20}}>1.0.0</Text>
      <Logo native="no" />
      <Logo native="yes" />
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
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
