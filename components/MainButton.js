import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const MainButton =props =>{

    return(

        <TouchableOpacity activeOpacity={0.8} onPress={props.mainButtonPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttonText:{
        color:'white',
        fontFamily:'secular_one',
        fontSize:18,
    }
})

export default MainButton;