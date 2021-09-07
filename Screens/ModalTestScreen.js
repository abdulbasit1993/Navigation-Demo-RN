import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width: screenWidth} = Dimensions.get('screen');
// screen width Multiply by 0.8
const DATA = [
  {
    id: 'id-1',
    title: 'My Profile',
  },
  {
    id: 'id-2',
    title: 'My Vehicles',
  },
  {
    id: 'id-3',
    title: 'Service Requests',
  },
  {
    id: 'id-4',
    title: 'Notifications',
  },
  {
    id: 'id-5',
    title: 'Wallet',
  },
  {
    id: 'id-6',
    title: 'Messages',
  },
  {
    id: 'id-7',
    title: 'Active Services',
  },
  {
    id: 'id-8',
    title: 'Contact us',
  },
  {
    id: 'id-9',
    title: 'Privacy Policy',
  },
  {
    id: 'id-10',
    title: 'Sign Out',
  },
];

const renderItem = ({item}) => <Item title={item.title} />;

const Item = ({title}) => (
  <View style={styles.item}>
    <FontAwesome5 style={{fontSize: 20, marginRight: 30}} name="user" />
    <Text style={styles.title}>{title}</Text>
  </View>
);

function ModalTestScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
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
            width: screenWidth * 0.7,
          }}>
          <View style={styles.userContainer}>
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={require('../assets/avatar.png')}
              />
            </View>

            <View>
              <Text style={{fontSize: 18}}>Richard Doe</Text>
              <Image
                style={{width: 90, height: 18}}
                source={require('../assets/five-stars.png')}
              />
            </View>
          </View>

          <View style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTestScreen;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#313131',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
