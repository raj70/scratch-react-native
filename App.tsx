import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstPage from './components/first-page';
import FooterPage from './components/footer-page';
import HeaderPage from './components/header-page';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <HeaderPage></HeaderPage>
      </View>
      <View style={styles.main}>
        <FirstPage name='rajen shrestha'/>
      </View>
      <View style={styles.footer}>
        <FooterPage></FooterPage>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  app:{
    backgroundColor: '#FF5733',
    color: '#fff',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'stretch'
  },
  header:{
    paddingTop:40,
    flex:1,
       
  },
  main:{
    flex:4,
  },
  footer:{
    flex:1,
    justifyContent: 'flex-end'
  }
})