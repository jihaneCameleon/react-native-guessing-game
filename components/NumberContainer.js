import React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import BodyText from './BodyText';


const NumberContainer = props =>{


    return(
       
            <View style={styles.textContainer}> 
                <Text style={styles.number}>{props.children}</Text>
            </View>
            
    )

}


const styles= StyleSheet.create({
    
    textContainer:{
        padding:10,
        borderColor:Colors.secondary,
        borderWidth:2,
        margin:10,
        borderRadius:10,

    },
    number:{
        color:Colors.secondary,
        fontSize:20
    }

})


export default NumberContainer;