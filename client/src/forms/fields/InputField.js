import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

class InputField extends Component {
  static defaultProps = {
    type: 'text',
  };

  render() {
    const { input, type, label, placeholder, meta: { touched, error } } = this.props;
    const showError = touched && error;

    return (
      <FormGroup color={showError ? 'danger' : ''}>
        {label && <Label>{label}</Label>}
        <Input {...input} type={type} placeholder={placeholder} />
        {showError && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default InputField;
