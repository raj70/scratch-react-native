import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function FooterPage(props){
    return(
        <View style={styles.continer}>
            <Text>Rajen Shrestha &copy; 2020</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    continer:{        
        padding:5,
        backgroundColor: '#FFC300',
        alignItems: 'center',
        justifyContent: 'center'
    }
});