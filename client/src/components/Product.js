import React from 'react';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import {ImagePath} from '../assets/ImagePath';

function Product({list, id, name, exports, imports}) {
  return (
    <View style={list ? styles.containerList : styles.containerInspect}>
      {list ? null : <Text style={styles.id}>{id}</Text>}
      <Image
        source={ImagePath[id]}
        style={list ? styles.imageS : styles.imageL}
      />
      <View style={list ? styles.inforList : styles.inforInspect}>
        <Text style={styles.title}>
          {list ? (exports == imports ? '✅ ' : '❌ ') : null}
          {name}
        </Text>
        <Text style={styles.exports}>출고 : {exports}</Text>
        <Text
          style={exports == imports ? {color: '#0BC904'} : {color: '#ED0000'}}>
          입고 : {imports}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  containerInspect: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -40,
  },
  imageS: {
    width: 100,
    height: 100,
    margin: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
  },
  imageL: {
    width: 250,
    height: 250,
    margin: 15,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
  },
  id: {
    fontSize: 15,
    letterSpacing: 2,
  },
  inforList: {
    justifyContent: 'center',
  },
  inforInspect: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  exports: {
    color: '#0BC904',
  },
});

export default Product;
