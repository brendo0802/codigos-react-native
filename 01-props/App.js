import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){

    let nome = 'Michael';
    
    return(
      
      <View>
      <Text>Ola mundo!</Text>
      <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Olá novamente</Text>

      <Text style={{ fontSize: 40 }}>{nome}</Text>

      <Jackson largura={255} altura={500} nomeando="Michael Jackson"/>
      </View>
    );
  }

}


export default App;

class Jackson extends Component{
  render(){
  let image = 'https://i.pinimg.com/564x/9c/2d/5d/9c2d5db7d0de20b786410b1bead3408b.jpg';
    
  
  return(
    <View>
    <Image
      source={{ uri: image }}
      style={{ width: this.props.largura, height: this.props.altura }}
      />


    <Text>{this.props.nomeando}</Text>
    </View>
  )
  }
}
