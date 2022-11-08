/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import Scanner from '../components/Scanner';

function Inspect() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{flex: 1}}>
      {!enabled ? (
        <View style={{flex: 1}}>
          <SafeAreaView
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="검사 시작" onPress={() => setEnabled(true)} />
          </SafeAreaView>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Button title="Back" onPress={() => setEnabled(false)} />
          <Scanner />
        </View>
      )}
    </View>
  );
}

export default Inspect;
