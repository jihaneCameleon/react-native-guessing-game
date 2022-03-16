import React from 'react';
import {View,StyleSheet,Text,Button,Image,Dimensions} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';


const GameOverScreen=props=>{
    return(
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                {/* <Image style={styles.image} source={require('../assets/istockphoto-894592700-612x612.jpg')} resizeMode="stretch" /> */}
                <Image style={styles.image} source={{uri:'https://cdn.pixabay.com/photo/2020/08/05/15/26/game-5465779_960_720.png'}}  resizeMode={'cover'} />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <TitleText style={styles.textHighlight}>{props.roundsNumber}</TitleText> rounds to guess number <TitleText style={styles.textHighlight}>{props.userNumber}</TitleText></BodyText>
            </View>
            <MainButton mainButtonPress={props.onRestart} >NEW GAME</MainButton>
        </View>
    )
}


const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    imageContainer:{
        borderRadius:Dimensions.get('window').height*0.7/2,
        borderWidth:3,
        borderColor:Colors.secondary,
        height:Dimensions.get('window').width*0.7,
        width:Dimensions.get('window').width*0.7,
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height/30
    },
    image:{
        width:'100%',
        height:'100%',
    },
    textHighlight:{
        color:Colors.primary
    },

    resultContainer:{
        marginHorizontal:30,
        marginVertical:Dimensions.get('window').width/50
    },
    resultText:{
        textAlign:'center',
        fontSize:Dimensions.get('window').height> 400 ? 16 :20
    }
})

export default GameOverScreen;
