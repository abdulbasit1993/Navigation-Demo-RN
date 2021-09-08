import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

const {width: screenWidth} = Dimensions.get('screen');
// screen width Multiply by 0.8

const Footer = () => {
  return (
    <View>
      <Text style={{color: '#fff', fontSize: 20}}>Reviews</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={require('../assets/five-stars.png')}
          style={{width: 90, height: 18}}
        />
        <Text style={{marginLeft: 10}}>& Up</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#525252',
            width: 200,
            paddingTop: 20,
            paddingBottom: 20,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#00ACED',
            width: 200,
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 10,
          }}>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderItem = ({item: {title, data}}) => (
  <View>
    <Text style={styles.headingText}>{title}</Text>
    <View style={styles.item}>
      {data.map(el => (
        <TouchableOpacity
          style={[
            {
              backgroundColor: el.isCheck ? '#00ACED' : 'transparent',
              padding: 20,
              borderColor: '#185268',
              borderWidth: 2,
              borderRadius: 40,
            },
          ]}>
          <Text style={styles.btnText}>{el.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const SandboxScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      title: 'Workshop Category',
      data: [
        {name: 'BodyShops', isCheck: false},
        {name: 'Electric Cars', isCheck: true},
        {name: 'Performance Shops', isCheck: false},
      ],
    },
    {
      title: 'Vehicle Category',
      data: [
        {name: 'Cars', isCheck: false},
        {name: 'Trucks', isCheck: true},
        {name: 'Motorbikes', isCheck: false},
      ],
    },
    {
      title: 'Services',
      data: [
        {name: 'Accident Repair', isCheck: false},
        {name: 'AC System Diagnosis', isCheck: false},
        {name: 'Car Polishing / Detailing', isCheck: false},
        {name: 'Electric / Hybrid System Repair', isCheck: true},
        {name: 'General Mechanical Work', isCheck: true},
      ],
    },
    {
      title: 'Brands',
      data: [
        {name: 'FORD', isCheck: false},
        {name: 'BMW', isCheck: false},
        {name: 'BMW', isCheck: false},
        {name: 'AUDI', isCheck: false},
        {name: 'JAGUAR', isCheck: false},
        {name: 'FERRARI', isCheck: true},
        {name: 'LAMBORGHINI', isCheck: false},
      ],
    },
  ]);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: '#252525',
        },
      ]}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={Footer}
        />
      </View>

      {/* <Button title="Show modal" onPress={toggleModal} />

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
            width: screenWidth * 0.7,
          }}>
          <View style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default SandboxScreen;

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: 'green',
    padding: 13,
  },
  headingText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 40,
  },
});
