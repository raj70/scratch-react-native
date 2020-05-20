import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function CustomerScreen(props){
    const [customers, setCustomers] =useState([]);
    const {footer, main} = props.route.params;

    function initialCustomers(){
        let key = 1;
        customers.push( 
            { key: key + '', name:'me', age:'42', height:172},
            { key: ++key + '', name:'mme', age:'18', height:152},
            { key: ++key + '', name:'abce', age:'42', height:152},
            { key: ++key + '', name:'efg', age:'18', height:152},
            { key: ++key + '', name:'xyz', age:'42', height:152},
            { key: ++key + '', name:'mnop', age:'18', height:152},
            { key: ++key + '', name:'qrst', age:'42', height:152},
        )
        return customers;
    }

    function Item({customer}){
        return (
            <View>
                <Text style={styles.item}>{customer.name} {customer.age}</Text>
            </View>
        );
    }


    useEffect(() =>{
        initialCustomers();
    });

    return (
        <View style={styles.container}>
            <View style={main}>
                <FlatList data={customers}
                    renderItem={ ({item}) => <Item customer={item}></Item> }/>
            </View>
            <View style={footer}>     
            <Button title='Home' onPress={()=> props.navigation.goBack()}></Button>                       
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        backgroundColor: '#EBDEF0',
        paddingTop: 22,
    },
    text:{
        color: '#581845'
    },
    item: {
        padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
      },
});