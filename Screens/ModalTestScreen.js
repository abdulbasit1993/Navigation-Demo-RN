import React, {useState} from 'react';
import {Button, Text, View, Image, FlatList, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

function ModalTestScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

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
        backdropTransitionInTiming={1300}
        backdropTransitionOutTiming={1300}
        onBackdropPress={() => setModalVisible(false)}
        style={{alignItems: 'flex-end', margin: 0}}>
        <View style={{backgroundColor: 'white', flex: 1, paddingTop: 50}}>
          <Text style={{fontSize: 18}}>Richard Doe</Text>
          <Image
            style={{width: 90, height: 18}}
            source={require('../assets/five-stars.png')}
          />
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
  },
  title: {
    fontSize: 12,
  },
});
