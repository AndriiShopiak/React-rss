import React from 'react';
import './style.css';

export default class ErrorBtnGenerate extends React.Component {
  state = {
    throwError: false,
  };

  generateError = (): void => {
    this.setState({ throwError: true });
  };

  render(): React.ReactNode {
    if (this.state.throwError) {
      throw new Error('This is a test error');
    }
    return (
      <button className="errorGeneratorBtn" onClick={this.generateError}>
        Generate Error
      </button>
    );
  }
}
