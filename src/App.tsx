/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Diceone from '../assets/one.png'
import Dicetwo from '../assets/two.png'
import Dicethree from '../assets/three.png'
import Dicefour from '../assets/four.png'
import Dicefive from '../assets/five.png'
import Dicesix from '../assets/six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType

}>


const Dice = ({imageUrl}: DiceProps): JSX.Element =>{
  
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): React.JSX.Element {
  

  return (
    <View>
      <Text>HI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default App;
