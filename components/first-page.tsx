import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LoginScreen(props: object){
    const[fname, setFName] = useState('');
    const[lname, setLName] = useState('');

    const {footer, main} = props.route.params;

    function goHome(){
      props.navigation.navigate('Home');
    }

    function onClick(){
        alert (`Hi Mate: ${lname}, ${fname}`);
    }
    return (
      <View style={styles.container}>
        <View style={main}>
          <Text>This is my first app from React-Native</Text>
          <Text style={styles.label}>Username:</Text>
               
          <TextInput style={styles.textBox} 
            defaultValue={fname} 
            onChangeText={t => setFName(t)}></TextInput>
                
          <Text style={styles.label}>Password:</Text>
               
          <TextInput style={styles.textBox} 
            defaultValue={lname}
            onChangeText={t => setLName(t)}></TextInput>
                
          <View style={styles.buttonsContainer}>
            <Button onPress={()=>{onClick()}} title='Login'></Button>
            <Button onPress={()=>{goHome()}} title='Cancel'></Button>
          </View>
        </View>
        <View style={footer}>
           <Button title='Home' onPress={()=> goHome()}></Button>
        </View>
      </View>
      ); 
}

const styles = StyleSheet.create({     
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor: '#FF5733',   
  },
    label:{
        color: '#FFC300',
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

