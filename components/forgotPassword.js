import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
        };
    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent.");

            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(text) => { this.setState({email: text}) }}
        />
        <View style={{paddingBottom:10}}>
        <Button
          color="#3740FE"
          title="Reset Password"
          onPress={this.onResetPasswordPress} 
        />
        </View>
         <Button
          style={styles.button}
          color="#3740FE"
          title="Back To Login"
          onPress={this.onBackToLoginPress} 
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  button: {
   padding : 20,
  },
});