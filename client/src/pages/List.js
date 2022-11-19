/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Button, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import Product from '../components/Product';
import Axios from 'axios';
import {IP_KEY} from '@env';

function List({navigation}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date('2022-11-19T09:00:00'));
  // const [check, setCheck] = useState(0);

  const isFocused = useIsFocused();

  // TEST
  // useEffect(() => {
  //   Axios.get(`http://${IP_KEY}:3000/api/product`)
  //     .then(res => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  function GetList() {
    Axios.get(`http://${IP_KEY}:3000/api/product/list`, {
      params: {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${
          date.getDate() + 1
        }`,
      },
    })
      .then(res => {
        setData(res.data);
        console.log(res.data); // TEST
      })
      .catch(error => console.log(error));
  }

  // function GetTotal() {
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].export === data[i].import) {
  //       setCheck(check + 1);
  //     }
  //   }
  // }

  useEffect(() => {
    GetList();
    // GetTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, isFocused]);

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
        {/* <Text>{check}</Text> */}
        {JSON.stringify(data) !== '[]' ? (
          data.map((m, index) => {
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
        ) : (
          <Text style={styles.text}>해당 일자에 등록된 상품이 없습니다.</Text>
        )}
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
  text: {
    marginTop: 150,
  },
});

export default List;
