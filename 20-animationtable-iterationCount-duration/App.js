import React from "react";
import { View,  Text, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

export default function App(){
  return(
    <View style={styles.container}>
      <Animatable.Text
      style={styles.title}
      //animation="bounce"
      //iterationCount={3}
      //iterationCount={infinity}
      animation="rubberBand"
      // iterationCount={100}
      iterationCount={Infinity}
      >
        'Clique Aqui'
      </Animatable.Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: ' center',
    backgroundColor: '#A855F7'
  },
  title: {
    fontSize: 25,
    textAlign:'center'
  }
})