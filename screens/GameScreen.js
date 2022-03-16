import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet,Dimensions,Alert,Button } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import {Ionicons} from '@expo/vector-icons';
import MainButton from '../components/MainButton';

const generateRandomBetween=(min,max,exclude) =>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randomNum= Math.floor(Math.random()*(max-min))+min;

    if(randomNum===exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else{
        return randomNum;
    }
}


const GameScreen = props => {

    const [currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.chosenNumber));
    const [rounds,setRounds]=useState(0);

    const currentLow=useRef(1);
    const currentHigh=useRef(100);

    const {chosenNumber,onGameOver}=props;

    useEffect(()=>{
        if(currentGuess===chosenNumber){
            onGameOver(rounds);
        }
    },[currentGuess,chosenNumber,onGameOver]);

    const nextGuessHandler =direction=>{
        if((direction ==='lower' && currentGuess<props.chosenNumber)|| (direction==='greater' && currentGuess > props.chosenNumber)){

            Alert.alert('don\'t lie!','That is wrong..',[{text:'Okay',style:'cancel'}])
            return;
        }
        if(direction==='lower'){
            currentHigh.current=currentGuess;
        }
        else{
            currentLow.current=currentGuess;
        }
        const nextNumber =generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currentRounds=> currentRounds+1)
    }

    return(
        <View style={styles.screen}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <MainButton mainButtonPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name='remove-outline' size={24} color="white" />
                </MainButton>
                <MainButton mainButtonPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name='add-outline' size={24} color="white" />
                </MainButton>
            </Card>
        </View>
    )
}

const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:Dimensions.get('window').height > 600 ? 20 : 5,
        width:300,
        maxWidth:'80%',
    }
})

export default GameScreen;

