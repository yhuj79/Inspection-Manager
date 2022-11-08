import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Axios from 'axios';

function List({navigation, route}) {
  const [data, setData] = useState([]);
  const {productId} = route.params || {};

  useEffect(() => {
    Axios.get('http://192.168.45.224:3000/api/product')
      .then(res => {
        setData(res.data);
        console.log(res.data); // Test
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data, null, 3)}</Text>
      <Text style={styles.productId}>{productId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productId: {
    fontSize: 20,
  },
});

export default List;
