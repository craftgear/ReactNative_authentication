import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../common/button';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onPress = this.onPress.bind(this);
  }

  render() {
    return (
      <View>
        <Text>Sign In</Text>

        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
        />

        <Text>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
        />

        <Button text={'Sign In'} onPress={this.onPress}/>
      </View>
    );
  }
  onPress() {
    this.setState({
      password: '',
    });
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
