import React, { ReactNode } from 'react';
import ErrorTab from '../ErrorTab/errorTab';
interface StateFields {
  hasError: boolean;
  errorMessage: string;
}
interface ErrorBoundaryProps {
  children: ReactNode;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateFields> {
  state: StateFields = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ errorMessage: error.toString() });
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorTab info={this.state.errorMessage} />;
    }
    return this.props.children;
  }
}
