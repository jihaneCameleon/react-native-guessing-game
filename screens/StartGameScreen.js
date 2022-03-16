import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,KeyboardAvoidingView,TextInput,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import { Dimensions } from 'react-native';

const StartGameScreen = props =>{
    
    const [inputValue,setInputValue]=useState('');
    const [confirmed,setCofirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState();

    const inputHandler=textInput=>{
        setInputValue(textInput.replace(/[^0-9]/g,''));
    }

    const resetInput=()=>{
        setInputValue('')
        setCofirmed(false)
    }

    

    const confirmInput=()=>{
        const chosenNumber=parseInt(inputValue);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid number','Number has to be a number betwwen 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetInput}])
            return;
        }
        setCofirmed(true);
        setInputValue('');
        setSelectedNumber(parseInt(inputValue))
        Keyboard.dismiss();
    }

    
    let confirmedOutput;
    if(confirmed){

        confirmedOutput= 
        <Card style={styles.numberContainer}>
            <BodyText>You selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton color={Colors.primary} mainButtonPress={()=>props.onStartGame(selectedNumber)} >START GAME</MainButton>
        </Card>
    }

    

    return(
    <ScrollView>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
            <View style={styles.screen}> 
                <TitleText style={styles.title}>Start a new Game</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a number</BodyText>
                    <Input style={styles.input} onChangeText={inputHandler} value={inputValue} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2} />
                    <View style={styles.btnContainer}>
                        <View style={styles.btn}><Button  color={Colors.secondary} title='reset' onPress={resetInput} /></View>
                        <View style={styles.btn}><Button color={Colors.primary} title='confirm' onPress={confirmInput} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
    </ScrollView>
    )
}


const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },

    title:{
        marginVertical:10,
    },

    inputContainer:{
        width:'80%',
        maxWidth:'95%',
        minWidth:300,
        alignItems:'center',
        
        
    },
    btnContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
        
    },
    btn:{
        width:'40%',
    },
    input:{
        width:50,
        textAlign:'center',
        marginBottom:20,
    },
    numberContainer:{
        marginTop:30,
        alignItems:'center'
    },

})

export default StartGameScreen;