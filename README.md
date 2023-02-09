<img src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/thumbnail.png" width="600">

입고 상품 검수 시스템

## Built With

<img src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/reactnative.png" width="300">

## About The Project

<div>
    <img align=top src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/1.png" width=200>
    <img align=top src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/2.png" width=200>
    <img align=top src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/3.png" width=200>
</div>

### :alarm_clock: 제작 기간

- 2022.11.02 ~ 2022.11.20

### :gear: 개발 환경

- Visual Studio Code
- React Native 0.68.2
- Xcode 14.1
- Simulator : iPhone 14 Pro (ios 16.1)

### :floppy_disk: [Database](https://github.com/yhuj79/Inspection-Manager/blob/main/index.js)

<img src="https://skillicons.dev/icons?i=express,mysql" alt="techstack" />

### :clipboard: 주요 기능 설명

#### [Inspect](https://github.com/yhuj79/Inspection-Manager/blob/main/client/src/pages/Inspect.js)
 - 검사 시작 페이지 (날짜 선택 후 Scanner 실행)
 - DatePicker : react-native-date-picker 라이브러리
 - 고른 날짜는 Scanner에 전달

#### [Scanner](https://github.com/yhuj79/Inspection-Manager/blob/main/client/src/components/Scanner.js)
 - react-native-camera-kit 라이브러리
 - event.nativeEvent.codeStringValue : 스캔한 바코드 값
 - 스캔 성공 시 해당 상품 정보 출력 (Axios.get), 입고 입력 시 DB에 반영됨

<div>
    <img align=top src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/scanner1.png" width=200>
    <img align=top src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/scanner2.png" width=200>
</div>

#### [List](https://github.com/yhuj79/Inspection-Manager/blob/main/client/src/pages/List.js)
 - DatePicker로 고른 날짜의 검수 리스트 (Axios.get)
 - 출고와 입고가 일치하지 않으면 빨간 글씨로 표시

<img src="https://raw.githubusercontent.com/yhuj79/Inspection-Manager/main/assets/list.png" width=200>

### :open_file_folder: Package

- [x] axios
- [x] material-top-tabs
- [x] react-native-date-picker
- [x] react-native-camera-kit

## Reference

[https://fomaios.tistory.com/entry/Nodejs-%EC%84%9C%EB%B2%84-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-Initialize-server-setting?category=988841](https://fomaios.tistory.com/entry/Nodejs-%EC%84%9C%EB%B2%84-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-Initialize-server-setting?category=988841)

[https://mrparkcodingschool.tistory.com/3](https://mrparkcodingschool.tistory.com/3)

[https://ssilook.tistory.com/m/entry/RN-ReactNative-IOS-%EB%B0%94%EC%BD%94%EB%93%9C-%EC%8A%A4%EC%BA%94%ED%95%98%EA%B8%B0](https://ssilook.tistory.com/m/entry/RN-ReactNative-IOS-%EB%B0%94%EC%BD%94%EB%93%9C-%EC%8A%A4%EC%BA%94%ED%95%98%EA%B8%B0)