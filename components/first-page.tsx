import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function FirstPage(props: object){
    const[fname, setFName] = useState('');
    const[lname, setLName] = useState('');

     function onClick(){
         alert (`Hi Mate: ${lname}, ${fname}`);
     }
    return (
        <ScrollView>  
          <View style={styles.container}>
            <Text>This is my first app from React-Native</Text>
              <Text style={styles.label}>Enter username:</Text>
            <TextInput style={styles.textBox} 
              defaultValue={fname} 
              onChangeText={t => setFName(t)}></TextInput>
              <Text style={styles.label}>Enter password:</Text>
              <TextInput style={styles.textBox} 
              defaultValue={lname}
              onChangeText={t => setLName(t)}></TextInput>
              <View style={styles.buttonsContainer}>
            <Button onPress={()=>{onClick()}} title='Login'></Button>
            <Button onPress={()=>{onClick()}} title='Cancel'></Button>
            </View>
          </View>
        </ScrollView>
      ); 
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FF5733',
        padding:10,
        color:'#581845'
    },
    label:{
        color: '#DAF7A6',
    },
    buttonsContainer:{
      alignItems:'center',
      justifyContent: 'center',
      flexDirection:'row',
    },
    textBox:{
        color: '#000',
        backgroundColor: '#fff',
        height:40,
        padding:5,     
    }
  });

