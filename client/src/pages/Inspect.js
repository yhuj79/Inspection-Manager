/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Scanner from '../components/Scanner';

function Inspect({navigation}) {
  const [date, setDate] = useState(new Date('2022-05-22T09:00:00'));
  const [enabled, setEnabled] = useState(false);

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
            <Text>{date.toISOString()}</Text>
            <Text>{`${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`}</Text>
            <Button title="검사 시작" onPress={() => setEnabled(true)} />
          </SafeAreaView>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Button title="날짜 재설정" onPress={() => setEnabled(false)} />
          <Scanner
            navigation={navigation}
            date={`${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`}
          />
        </View>
      )}
    </View>
  );
}

export default Inspect;
