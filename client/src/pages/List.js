import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Axios from 'axios';
import {IP_KEY} from '@env';

function List({navigation, route}) {
  const [data, setData] = useState([]);
  const {date} = route.params || {};

  // TEST
  // useEffect(() => {
  //   Axios.get(`http://${IP_KEY}:3000/api/product`)
  //     .then(res => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  useEffect(() => {
    Axios.get(`http://${IP_KEY}:3000/api/product/list`, {
      params: {date: date},
    })
      .then(res => {
        setData(res.data);
        console.log(res.data); // TEST
      })
      .catch(error => console.log(error));
  }, [date]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{JSON.stringify(data, null, 3)}</Text>
        <Text>{date}</Text>
      </View>
    </ScrollView>
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
