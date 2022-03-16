  import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts=()=>{
  Font.loadAsync({
    'secular_one':require('./assets/Fonts/SecularOne-Regular.ttf'),
    'nunito':require('./assets/Fonts/NunitoSans-Regular.ttf'),
  });
};

export default function App() {

  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRounds]=useState(0);
  const [dataLoaded,setDataLoaded]=useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)} />
  }

  const configureNewGame=()=>{
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler=(selectedNumber)=>{

    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler=numberOfRouds=>{
    setGuessRounds(numberOfRouds);
  }

  let content=<StartGameScreen onStartGame={startGameHandler} />;

  if(userNumber && guessRounds<=0){
    content=<GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler} />
  }
  else if(guessRounds>0){
    content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGame} />
  }

  return (
    <View style={styles.screen} >
      <Header title="Gess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      flex:1,
    }
});
