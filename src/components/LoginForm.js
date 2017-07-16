import React, { Component } from 'react';
import { Button, Card, CardSection, FormField } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { text: ' ' };
  }

  render() {
    return (
      <Card>
        {/* UsernameInputField */}
        <CardSection>
          <FormField
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        {/* PasswordInputField */}
        <CardSection />

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
