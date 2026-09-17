import React, {useRef, useEffect} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
 
export default function App(){
 
const larguraAnimada = useRef(new Animated.Value(0)).current;
const alturaAnimada = useRef(new Animated.Value(50)).current;
//const opacidadeAnimada = useRef(new Animated.Value(1)).current;
 
  useEffect(() => {
    Animated.timing(larguraAnimada, {
      toValue: 300,
      duration: 10000,
      useNativeDriver: false
    }).start();
  }, [])
 
  let porcentagemLargura = larguraAnimada.interpolate({
    //Entrada
    inputRange: [0, 100],
 
    //Vai sair de 0% até 100% da largura do elemento
    outputRange: ['0%', '100%']
  })
 
  return(
    <View style= {estilos.container}>
      <Animated.View
      style={{
        width: porcentagemLargura,
        height: alturaAnimada,
        backgroundColor: '#820AD1',
        justifyContent: 'center',
        justifyContent:"Text",
        borderRadius: 20,
        borderColor: '#456787' ,
        borderWidth: 4,
        //opacity: opacidadeAnimada
      }}>
        {/*
        <Text style={{textAlign: 'center', fontSize: 20, color: '#fff'}}>
          Bom dia, como está?
        </Text>
        */}
 <Text>Carregando...</Text>
      </Animated.View>
    </View>
  )
}
 
const estilos = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})