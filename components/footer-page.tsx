import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function FooterPage(){
    return(
        <View style={styles.container}>
            <Text>Rajen Shrestha &copy; 2020</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{        
        padding:5,
        backgroundColor: '#FFC300',
        alignItems: 'center',
        justifyContent: 'center'
    }
});