import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const {width: screenWidth} = Dimensions.get('screen');

const DATA = [
  {
    id: 'item-1',
    heading: 'Workshop Category',
    isChecked: false,
  },
  {
    id: 'item-2',
    heading: 'Vehicle Category',
  },
];

// Code for multiple select buttons:
// const renderItem = ({item: {heading}}) => (
//   <View style={styles.item, { backgroundColor: isChecked ? "#000" : "#fff"}}>
//     <Text style={styles.heading}>{heading}</Text>
//   </View>
// );

const renderItem = ({item: {heading}}) => (
  <View style={styles.item}>
    <Text style={styles.heading}>{heading}</Text>
  </View>
);

function FilterModalScreen() {
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
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

export default FilterModalScreen;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 23,
  },
  header: {
    fontSize: 22,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
  },
});
