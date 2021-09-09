import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ModalTestScreen from './Screens/ModalTestScreen';
import FilterModalScreen from './Screens/FilterModalScreen';
import SandboxScreen from './Screens/SandboxScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
          }}
        />

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="ModalTestScreen"
          component={ModalTestScreen}
          options={{
            title: 'Modal Test Screen',
          }}
        />
        <Stack.Screen
          name="FilterModalScreen"
          component={FilterModalScreen}
          options={{
            title: 'Filter Modal Screen',
          }}
        />
        <Stack.Screen
          name="SandboxScreen"
          component={SandboxScreen}
          options={{
            title: 'Demo Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
