import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, FormField, Spinner } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', error: '', loading: false };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(err => this.onLoginFailure(err.message));
      });
  }

  onLoginSuccess() {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: '',
    });
  }

  onLoginFailure(err) {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: err,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        {/* UsernameInputField */}
        <CardSection>
          <FormField
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        {/* PasswordInputField */}
        <CardSection>
          <FormField
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        {/* AuthenticationError */}
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        {/* LoginButton */}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
