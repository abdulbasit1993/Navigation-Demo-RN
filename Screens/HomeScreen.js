import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={styles.modalBtn}>
        <Button
          title="Go to Modal Test screen"
          onPress={() => navigation.navigate('ModalTestScreen')}
        />
      </View>
      <View style={styles.modalBtn}>
        <Button
          title="Go to the Filter Modal screen"
          onPress={() => navigation.navigate('FilterModalScreen')}
        />
      </View>
      <View style={styles.modalBtn}>
        <Button
          title="Go to Demo Screen"
          onPress={() => navigation.navigate('SandboxScreen')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtn: {
    marginTop: 50,
  },
});
