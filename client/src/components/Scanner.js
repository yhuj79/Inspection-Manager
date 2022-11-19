import React, {useState, useRef, useEffect} from 'react';
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';
import Product from '../components/Product';
import Axios from 'axios';
import {IP_KEY} from '@env';

function Scanner({navigation, date}) {
  const ref = useRef(null);
  const [scaned, setScaned] = useState(true);
  const [code, setCode] = useState(0);
  const [data, setData] = useState([]);
  const [num, setNum] = useState('');

  const onBarCodeRead = (event: any) => {
    // eslint-disable-next-line curly
    if (!scaned) return;
    setScaned(false);
    setCode(event.nativeEvent.codeStringValue);
  };

  const cameraOpen = () => {
    setScaned(true);
  };

  const cameraClose = () => {
    setScaned(false);
  };

  useEffect(() => {
    Axios.get(`http://${IP_KEY}:3000/api/product/scan`, {
      params: {date: date, id: code},
    })
      .then(res => {
        setData(res.data);
        console.log(res.data); // Test
        if (code) {
          cameraClose();
        }
      })
      .catch(error => console.log(error));
  }, [date, code]);

  const updateImport = () => {
    Axios.get(`http://${IP_KEY}:3000/api/product/update`, {
      params: {import: Number(num), date: date, id: code},
    })
      .then(res => {
        console.log(res.data); // Test
        cameraOpen();
        setNum('');
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        {scaned ? (
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
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.backdrop}>
            {data[0] ? (
              data.map((m, index) => {
                return (
                  <View key={index}>
                    <Product
                      list={false}
                      key={index}
                      id={m.id}
                      name={m.name}
                      exports={m.export}
                      imports={m.import}
                    />
                    <View style={styles.inputline}>
                      <TextInput
                        style={styles.input}
                        onChangeText={setNum}
                        value={num}
                        placeholder="입고 입력"
                        placeholderTextColor="rgba(0, 0, 0, 0.7)"
                        keyboardType="number-pad"
                      />
                      <Button title="등록" onPress={() => updateImport()} />
                      <Button title="취소" onPress={() => cameraOpen()} />
                    </View>
                  </View>
                );
              })
            ) : (
              <View>
                <Text>해당 일자에 등록된 상품이 없습니다.</Text>
                <Button title="검사 시작" onPress={() => cameraOpen()} />
              </View>
            )}
          </KeyboardAvoidingView>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scanner: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputline: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 110,
  },
  input: {
    width: 100,
    height: 30,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    padding: 7,
  },
});

export default Scanner;
