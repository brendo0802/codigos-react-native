import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
 
class App extends Component{
 
  constructor(props){
    super(props);
 
    this.state = {
      nome: ''
    };

    //deixando a função acessar as propriedades
    this.entrar = this.entrar.bind(this)
  
    
  }
  entrar(){
    this.setState({
      nome: 'Brendo Kierme'
    })
  }
 
  render(){
    return(
      <View style={{ marginTop: 52 }}>
        <Button title="Entrar" onPress={this.entrar}/>

        <Text style= {{ fontsize: 23,color: 'green', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
 
    );
  }
}
 
export default App;