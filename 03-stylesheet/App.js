import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component{
  render(){
    return(
      <View style={styles.area}>
        <Text style={styles.textoPrincipal}>Primeiro contato com JavaScript</Text>
        <Text style={styles.alinhaTexto}>A professora ana sem massagem</Text>
        <Text>Murilo fala demais</Text>
        <Text style={styles.textoPrincipal}>Lucas ele tem razão</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 40
  },
  textoPrincipal:{
    fontSize: 25,
    color:'#05ddfaff'
  },
  alinhaTexto:{
    textAlign: 'center'
  }

})

export default App;