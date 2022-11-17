/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Scanner from '../components/Scanner';

function Inspect({navigation}) {
  const [enabled, setEnabled] = useState(false);
  const [date, setDate] = useState(new Date('2022-05-22T09:00:00'));

  return (
    <View style={{flex: 1}}>
      {!enabled ? (
        <View style={{flex: 1}}>
          <SafeAreaView
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <DatePicker
              date={date}
              mode="date"
              locale={'kor'}
              textColor={'#000'}
              onDateChange={setDate}
            />
            <Button title="검사 시작" onPress={() => setEnabled(true)} />
          </SafeAreaView>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Button
            title={`${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`}
            onPress={() => setEnabled(false)}
          />
          <Scanner
            navigation={navigation}
            date={`${date.getFullYear()}-${date.getMonth() + 1}-${
              date.getDate() + 1
            }`}
          />
        </View>
      )}
    </View>
  );
}

export default Inspect;
