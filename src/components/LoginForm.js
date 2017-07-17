import React, { Component } from 'react';
import { Button, Card, CardSection, FormField } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
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

        {/* LoginButton */}
        <CardSection>
          <Button>
          Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
