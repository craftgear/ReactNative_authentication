import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <Text>Sign In</Text>
        <TextInput style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center',
  }
});