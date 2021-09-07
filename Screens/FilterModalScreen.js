import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  SectionList,
  StatusBar,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const {width: screenWidth} = Dimensions.get('screen');

const DATA = [
  {
    title: 'Workshop Category',
    data: ['BodyShops', 'Electric Cars', 'Performance Shops'],
  },
  {
    title: 'Vehicle Category',
    data: ['Cars', 'Trucks', 'Motorbikes'],
  },
  {
    title: 'Services',
    data: [
      'Accident Repair',
      'AC System Diagnosis',
      'Car Polishing / Detailing',
      'Electric / Hybrid System Repair',
      'General Mechanical Work',
    ],
  },
  {
    title: 'Brands',
    data: ['FORD', 'BMW', 'AUDI', 'JAGUAR', 'FERRARI', 'LAMBORGHINI'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
        <SafeAreaView
          style={{
            backgroundColor: 'white',
            flex: 1,
            paddingTop: 30,
            width: screenWidth * 0.7,
          }}>
          <SectionList
            style={styles.container}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section: {title, data}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
}

export default FilterModalScreen;

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: 'transparent',
    padding: 10,
    marginVertical: 10,
    borderStyle: 'solid',
    borderColor: '#1B4353',
    borderWidth: 2,
    borderRadius: 50,
  },
  header: {
    fontSize: 22,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
  },
});
