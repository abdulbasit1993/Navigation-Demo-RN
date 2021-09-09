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
} from 'react-native';
// import Modal from 'react-native-modal';

const {width: screenWidth} = Dimensions.get('screen');
// screen width Multiply by 0.8

const SandboxScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
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
        {
          name: 'Electric / Hybrid System Repair',
          isCheck: true,
          key: 'id-14',
        },
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
                //Here I have update your all isCheck prop to false;
                let dat = prev.map((item, index) =>
                  item.data.map(v => (v.isCheck = false)),
                );
                return [...prev];
              });
            }}
            style={{
              backgroundColor: '#525252',
              width: 200,
              paddingTop: 20,
              paddingBottom: 20,
              alignItems: 'center',
              borderTopLeftRadius: 22,
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
              width: 200,
              alignItems: 'center',
              paddingTop: 20,
              paddingBottom: 20,
              borderTopRightRadius: 23,
            }}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = ({item: {title, data, key}, index}) => (
    <View>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.item}>
        {data.map(el => (
          <TouchableOpacity
            onPress={() => {
              setData(prev => {
                el.isCheck = !el.isCheck; // `!` means if a value is true then make it false else make it true;
                let dat = [el, ...prev[index].data];
                // Here I'm spreading the both objects and merging the data;
                return [...prev];
                // Retruned the updated values by spreading it.
              });
            }}
            key={el.key}
            style={[
              {
                backgroundColor: el.isCheck ? '#00ACED' : 'transparent',
                padding: 20,
                borderColor: '#185268',
                borderWidth: 2,
                borderRadius: 40,
                marginBottom: 10,
                marginRight: 10,
              },
            ]}>
            <Text style={styles.btnText}>{el.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

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
          keyExtractor={item => item.key}
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
