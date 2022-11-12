/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {Backdrop} from 'react-native-backdrop';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';
import Product from '../components/Product';
import {ImagePath} from '../assets/ImagePath';
import Axios from 'axios';
import {IP_KEY} from '@env';

function Scanner({navigation, date}) {
  const ref = useRef(null);
  const [scaned, setScaned] = useState(true);
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`http://${IP_KEY}:3000/api/product/scan`, {
      params: {date: date, id: code},
    })
      .then(res => {
        setData(res.data);
        console.log(res.data); // Test
      })
      .catch(error => console.log(error));
  }, [date, code]);

  const onBarCodeRead = (event: any) => {
    if (!scaned) return;
    setScaned(false);
    setCode(event.nativeEvent.codeStringValue);
    // navigation.jumpTo('List', {
    //   productId: event.nativeEvent.codeStringValue,
    //   date: date,
    // });
    setVisible(true);
  };

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setScaned(true);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.scanner}
        ref={ref}
        cameraType={CameraType.Back} // Front/Back(default)
        scanBarcode
        showFrame={true}
        laserColor="rgba(0, 0, 0, 0)"
        surfaceColor="rgba(0, 0, 0, 0)"
        onReadCode={onBarCodeRead}
      />
      <Backdrop
        visible={visible}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onClose={() => {}}
        swipeConfig={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        animationConfig={{
          speed: 5,
          bounciness: 4,
        }}
        overlayColor="rgba(0,0,0,0.32)"
        backdropStyle={{
          backgroundColor: '#fff',
        }}>
        <View style={styles.backdrop}>
          {data[0] ? (
            data.map((m, index) => {
              return (
                <Product
                  list={false}
                  key={index}
                  id={m.id}
                  name={m.name}
                  exports={m.export}
                  imports={m.import}
                />
              );
            })
          ) : (
            <Text>등록된 상품이 없습니다.</Text>
          )}
          <TextInput
            style={styles.input}
            // onChangeText={onChangeText}
            // value={value}
            placeholder={data[0] ? ` ${String(data[0].import)}` : null}
            placeholderTextColor="#000"
            keyboardType="number-pad"
          />
          <Button title="등록" onPress={() => handleClose()} />
          <Button title="취소" onPress={() => handleClose()} />
        </View>
      </Backdrop>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scanner: {flex: 1},
  backdrop: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 144,
  },
  input: {
    width: 100,
    height: 30,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default Scanner;
