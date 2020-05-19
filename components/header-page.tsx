import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function HearderPage(){

    return (
        <View style={styles.contianer}>
            <View style={styles.menu}>
                <Button title='Home' onPress={() => {alert('sorry, where is home? ')}}></Button>
                <Button title='Calculate' onPress={() => {alert('excuse me, what to cal?')}}></Button>
                <Button title='Loan' onPress={() => {alert('excuse me, what to cal?')}}></Button>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    contianer:{
        backgroundColor: '#fff',
        color:'#fff',  
        borderBottomColor: '#FFC300',  
        borderBottomWidth:10    
    },
    menu:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft:5,
    }
});