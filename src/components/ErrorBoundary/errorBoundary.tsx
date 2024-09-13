import React, { ReactNode } from 'react';
interface StateFields {
  hasError: boolean;
}
interface ErrorBoundaryProps {
  children: ReactNode;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateFields> {
  state: StateFields = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  //   console.error('Uncaught error:', error, errorInfo);
  //   this.setState({ errorMessage: error.toString() });
  // }
  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Oops, somethimg went wrong</h1>;
    }
    return this.props.children;
  }
}
