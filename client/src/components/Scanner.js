import React, {useRef} from 'react';
// import {Alert, Vibration} from 'react-native';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';

function Scanner({navigation}) {
  const ref = useRef(null);

  const onBarCodeRead = (event: any) => {
    navigation.jumpTo('List', {productId: event.nativeEvent.codeStringValue});
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
});

export default Scanner;
