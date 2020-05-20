import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './components/logn-screen';
import FooterPage from './components/footer-page';
import HeaderPage from './components/header-page';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/home-screen';

const Stack = createStackNavigator();

export default function App() {
  return (    
      <View style={styles.app}>
            <NavigationContainer> 
              <Stack.Navigator>        
                <Stack.Screen name="Home"
                  component={HomeScreen} 
                  initialParams={{footer: styles.footer, main: styles.main }}
                  options={{ title: 'Welcome' }}/>
                <Stack.Screen name="Login" 
                  component={LoginScreen} 
                  initialParams={{footer: styles.footer, main: styles.main }}
                  options={{ title: 'Login'}}  />    
              </Stack.Navigator>   
            </NavigationContainer>                    
      </View> );
}


const styles = StyleSheet.create({
  app:{
    backgroundColor: '#FF5733',
    color: '#fff',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'stretch',
  },
  main:{
    flex:5, 
    justifyContent: 'center'
  } ,
  footer:{
    backgroundColor: '#f0f8ff',
    flex:1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
}
})