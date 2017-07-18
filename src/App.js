import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPI87JxCdPgPFFNnGTMJWVJkns6i9Ein8',
      authDomain: 'authreactnative-9016b.firebaseapp.com',
      databaseURL: 'https://authreactnative-9016b.firebaseio.com',
      projectId: 'authreactnative-9016b',
      storageBucket: 'authreactnative-9016b.appspot.com',
      messagingSenderId: '545728647170',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LogoutForm />;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerContainerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainerStyle: {
    paddingTop: 60,
  },
};

export default App;
