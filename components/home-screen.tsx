import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function HomeScreen(props){

    const {footer, main} = props.route.params;

    return(
        <View style={styles.container}>
            <View style={main}>
                <Text style={styles.text}>Welcome to your Home</Text>
                <Text>🏡</Text>
            </View>
            <View style={footer}>
                <Button title='Login' onPress={()=> props.navigation.navigate('Login')}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: '#DAF7A6',
       
    },
    text:{
        color: '#581845'
    }
});