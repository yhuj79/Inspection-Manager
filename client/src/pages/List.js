import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Product from '../components/Product';
import Axios from 'axios';
import {IP_KEY} from '@env';

function List({navigation}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const [date, setDate] = useState(new Date('2022-05-22T09:00:00'));

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
      params: {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${
          date.getDate() + 1
        }`,
      },
    })
      .then(res => {
        setData(res.data);
        // console.log(res.data); // TEST
      })
      .catch(error => console.log(error));
  }, [date]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title={`${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`}
          onPress={() => setOpen(true)}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          locale={'kor'}
          textColor={'#fff'}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        {data !== 0
          ? data.map((m, index) => {
              return (
                <Product
                  list={true}
                  key={index}
                  id={m.id}
                  name={m.name}
                  exports={m.export}
                  imports={m.import}
                />
              );
            })
          : ''}
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
