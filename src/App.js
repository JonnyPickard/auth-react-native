import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPI87JxCdPgPFFNnGTMJWVJkns6i9Ein8',
      authDomain: 'authreactnative-9016b.firebaseapp.com',
      databaseURL: 'https://authreactnative-9016b.firebaseio.com',
      projectId: 'authreactnative-9016b',
      storageBucket: 'authreactnative-9016b.appspot.com',
      messagingSenderId: '545728647170',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
