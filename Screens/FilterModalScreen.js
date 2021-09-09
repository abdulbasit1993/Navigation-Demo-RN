import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';

const {width: screenWidth} = Dimensions.get('screen');

// Code for multiple select buttons:
// const renderItem = ({item: {heading}}) => (
//   <View style={styles.item, { backgroundColor: isChecked ? "#000" : "#fff"}}>
//     <Text style={styles.heading}>{heading}</Text>
//   </View>
// );

// const renderItem = ({item: {heading}}) => (
//   <View style={styles.item}>
//     <Text style={styles.heading}>{heading}</Text>
//   </View>
// );

const resetBtnAlert = () =>
  Alert.alert('Alert!', 'Reset Button is Pressed!', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const applyBtnAlert = () =>
  Alert.alert('Alert!', 'Apply Button is Pressed!', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

function FilterModalScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };

  const renderItem = ({item: {title, data, key}, index}) => (
    <View>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.item}>
        {data.map(el => (
          <TouchableOpacity
            key={el.key}
            style={[
              {
                backgroundColor: el.isCheck ? '#00ACED' : 'transparent',
                padding: 12,
                borderColor: '#185268',
                borderWidth: 2,
                borderRadius: 40,
                marginBottom: 10,
                marginRight: 10,
              },
            ]}
            onPress={() => {
              setData(prev => {
                el.isCheck = !el.isCheck; // `!` means if a value is true then make it false else make it true;
                // let dat = [el, ...prev[index].data];
                // Here I'm spreading the both objects and merging the data;
                return [...prev];
                // Returned the updated values by spreading it.
              });
            }}>
            <Text style={styles.btnText}>{el.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const [data, setData] = useState([
    {
      key: 'id-1',
      title: 'Workshop Category',
      data: [
        {name: 'BodyShops', isCheck: false, key: 'id-5'},
        {name: 'Electric Cars', isCheck: true, key: 'id-6'},
        {name: 'Performance Shops', isCheck: false, key: 'id-7'},
      ],
    },
    {
      key: 'id-2',
      title: 'Vehicle Category',
      data: [
        {name: 'Cars', isCheck: false, key: 'id-8'},
        {name: 'Trucks', isCheck: true, key: 'id-9'},
        {name: 'Motorbikes', isCheck: false, key: 'id-10'},
      ],
    },
    {
      key: 'id-3',
      title: 'Services',
      data: [
        {name: 'Accident Repair', isCheck: false, key: 'id-11'},
        {name: 'AC System Diagnosis', isCheck: false, key: 'id-12'},
        {name: 'Car Polishing / Detailing', isCheck: false, key: 'id-13'},
        {name: 'Electric / Hybrid System Repair', isCheck: true, key: 'id-14'},
        {name: 'General Mechanical Work', isCheck: true, key: 'id-15'},
      ],
    },
    {
      key: 'id-4',
      title: 'Brands',
      data: [
        {name: 'FORD', isCheck: false, key: 'id-16'},
        {name: 'BMW', isCheck: false, key: 'id-17'},
        {name: 'BMW', isCheck: false, key: 'id-18'},
        {name: 'AUDI', isCheck: false, key: 'id-19'},
        {name: 'JAGUAR', isCheck: false, key: 'id-20'},
        {name: 'FERRARI', isCheck: true, key: 'id-21'},
        {name: 'LAMBORGHINI', isCheck: false, key: 'id-22'},
      ],
    },
  ]);
  const Footer = () => {
    return (
      <View>
        <Text style={{color: '#fff', fontSize: 20}}>Reviews</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={require('../assets/five-stars.png')}
            style={{width: 90, height: 18}}
          />
          <Text style={{marginLeft: 10}}>& Up</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity
            onPress={() => {
              setData(prev => {
                const data = [...prev];
                // console.log(prev);
                console.log(prev);
                let dat = data.map((item, index) =>
                  item.data.map(v => (v.isCheck = false)),
                );
                console.log(prev);
                return [...prev];
              });
            }}
            style={{
              backgroundColor: '#525252',
              width: 160,
              paddingTop: 20,
              paddingBottom: 20,
              alignItems: 'center',
              borderTopLeftRadius: 10,
            }}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              //You can call an API to store your results or directly save the results in your Storage.
              alert('Results has been applied!');
            }}
            style={{
              backgroundColor: '#00ACED',
              width: 155,
              alignItems: 'center',
              paddingTop: 20,
              paddingBottom: 20,
              borderTopRightRadius: 10,
            }}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={500}
        animationOutTiming={500}
        hasBackdrop={true}
        backdropColor="#252525"
        backdropOpacity={0.8}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        onBackdropPress={() => setModalVisible(false)}
        style={{alignItems: 'flex-end', margin: 0}}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            paddingTop: 50,
            width: screenWidth * 0.8,
          }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            ListFooterComponent={Footer}
          />
        </View>
      </Modal>
    </View>
  );
}

export default FilterModalScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 35,
  },
});
