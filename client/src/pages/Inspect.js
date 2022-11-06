/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Button} from 'react-native';

function Inspect() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="검사 시작" />
      </SafeAreaView>
    </View>
  );
}

export default Inspect;
