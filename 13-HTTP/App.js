import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
import api from './src/services/api';
 
export default function App() {
 
  const [ cep, setcep] = useState('');
  const [cepUser, setCepUser ] = useState({});
 
  async function buscar() {
    if(cep == ''){
      alert('Digite o CEP')
    return;
    }

    try{
        const reponse = await api.get(`/${cep}/json`);
        setCepUser(reponse.data);
        Keyboard.dismiss();
    } catch(error){
      console.log('ERROR: ' + error);
    }
  }
 
  function limpar(){
    setcep('');
    setCepUser({});
  }
 
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
 
        <TextInput
          style={styles.input}
          placeholder="Exemplo 04700000"
          value={cep}
          onChangeText={(texto) => setcep(texto)}
          keyboardType='numeric'
        />
      </View>
 
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'#1168ccff'}]} onPress={buscar}>
            <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'#ccb911ff'}]} onPress={limpar}>
            <Text style={styles.botaoText}>Limpar</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
 
      </View>
    </SafeAreaView>
  </TouchableNativeFeedback>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fadadff',
  },
  text: {
    borderColor: '#000000ff',
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#9fadadff',
    borderWidth: 1,
    borderColor: '#000a03ff',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000a03ff',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5
  },
  botaoText: {
    fontSize: 22,
    color: '#000000'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 20
}
 
});
 