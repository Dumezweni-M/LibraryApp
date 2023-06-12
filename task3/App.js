import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function App() {
  const [ name , setName] = useState ('');
//----------------------------------------------------------------------------------------- 
  const generatePattern = (length, isOdd) => {
    let pattern = '';
    if (isOdd) {
      for (let i = length; i >= 1; i--) {
        pattern += '*'.repeat(i) + '\n';
      }
    } else {
      for (let i = 1; i <= length; i++) {
        pattern += '*'.repeat(i) + '\n';
      }
    }
    return pattern;
  };
//----------------------------------------------------------------------------------------- 
  const pattern = name.length % 2 === 0
  ? generatePattern(name.length, false)  // Even number, normal pattern
  : generatePattern(name.length, true);  
  //----------------------------------------------------------------------------------------- 
  return (
    <View>
      <TextInput style={styles.input1} onChangeText={(val) => setName (val)} />
      <Text style={styles.result}>Name : {name}</Text>
      <Text style={styles.result}>Length : {name.length}</Text>

      <Text style={styles.result}>
        Length is {name.length % 2 === 0 ? 'Even' : 'Odd'}
      </Text>

      <View>
      <Text  style={styles.resultAst}>{pattern}</Text>
      </View>  
    </View>
  );
}























//----------------------------------------------------------------------------------------- 
const styles = StyleSheet.create({
  name: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input1: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    borderWidth: 1,
    width: '50%',
    margin: '2%',
    marginTop: 20,
    marginLeft: '25%',
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  result: {
    color: 'grey',
    // textAlign: 'center',
    fontSize: 30,
    width: '50%',
    margin: '1%',
    marginLeft: '25%',
    borderColor: 'lightgrey',
  },
  resultAst: {
    color: 'slateblue',
    textAlign: 'center',
    fontSize: 60,
    width: '50%',
    fontWeight: '900',
    margin: '1%',
    marginLeft: '25%',
    borderColor: 'lightgrey',
  },
  
});
