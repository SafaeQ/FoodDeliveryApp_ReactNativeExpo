import * as React from 'react';
import { Provider } from 'react-redux';
// Navigation components 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView } from 'react-native';

// import screeen

import BordScreen from './screens/BordScreen'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

import  Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
        
          {/* <Stack.Screen name="Bord" component={BordScreen} />
          <Stack.Screen name="Login" component={LoginScreen } />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Root" component={Navigation} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    </>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 1,
  },
});
