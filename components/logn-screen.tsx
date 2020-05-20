import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LoginScreen(props: object){
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const {footer, main, setLogin} = props.route.params;

    function goHome(){
      props.navigation.navigate('Home');
    }

    function onLogin(){
        if(username === 'rajen' && password == 'hello1'){
          setLogin(true);
          goHome();
        }
        else{
          setLogin(false);
        }
    }

    return (
      <View style={styles.container}>
        <View style={main}>
          <Text>This is my first app from React-Native</Text>
          <Text style={styles.label}>Username:</Text>
               
          <TextInput style={styles.textBox} 
            defaultValue={username} 
            onChangeText={t => setUsername(t)}></TextInput>
                
          <Text style={styles.label}>Password:</Text>
               
          <TextInput style={styles.textBox} 
            defaultValue={password}
            onChangeText={t => setPassword(t)}></TextInput>
                
          <View style={styles.buttonsContainer}>
            <Button onPress={()=>{onLogin()}} title='Login'></Button>
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

