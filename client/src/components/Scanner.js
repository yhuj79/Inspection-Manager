/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {Backdrop} from 'react-native-backdrop';
import {Dimensions, StyleSheet, View, Text, Button, Image} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';
import Axios from 'axios';

function Scanner({navigation, date}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://192.168.45.224:3000/api/product/scan', {
      params: {date: date, id: code},
    })
      .then(res => {
        setData(res.data);
        console.log(res.data); // Test
      })
      .catch(error => console.log(error));
  }, [date, code]);

  const onBarCodeRead = (event: any) => {
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
          {data ? (
            <>
              <Image
                source={require('../assets/reactnative.png')}
                style={{width: 250, height: 250, margin: 10}}
              />
              <Text>{data[0].name}</Text>
              <Text>출고 : {data[0].export}</Text>
              <Text>입고 : {data[0].import}</Text>
            </>
          ) : (
            <Text>등록된 상품이 없습니다.</Text>
          )}
          <Button
            title="등록"
            onPress={() =>
              navigation.jumpTo('List', {
                date: date,
              })
            }
          />
          <Button title="취소" onPress={() => setVisible(false)} />
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
    height: Dimensions.get('window').height,
  },
});

export default Scanner;
