import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function HomeScreen(props){

    const [islogin, setLogin] = useState(false);
    const {footer, main, isLogin} = props.route.params;

    return(
        <View style={styles.container}>
            <View style={main}>
                <Text style={styles.text}>Welcome to your Home</Text>
                <Text>🏡</Text>
            </View>
            <View style={footer}>
                <Button title='Login'  
                    disabled={islogin} 
                    onPress={()=> props.navigation.navigate('Login', {setLogin})}></Button> 
                <Button title='Customer'                     
                    onPress={()=> props.navigation.navigate('Customer', {isLogin})}></Button>               
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