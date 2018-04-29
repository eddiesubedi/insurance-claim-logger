import React, { Component } from 'react';

export class KeyboardAvoidingView extends Component {
  render() {
    const Component = Platform.select({
      ios: KeyboardAvoidingView,
      android: View,
    });
    const {children, ...otherprops} = this.props;
    return (
      <Component behavior="padding" {...otherprops}>
        {children}
      </Component>
    );
  }
}
