import React, { ReactNode } from 'react';
import './style.css';

interface ErrorInfo {
  info: string;
}

class ErrorTab extends React.Component<ErrorInfo> {
  constructor(props: ErrorInfo) {
    super(props);
  }
  render(): ReactNode {
    const { info } = this.props;
    return (
      <div className="error_tab_block">
        <img src="src\assets\icons\errorIcon.png" alt="ErrorIcon" />
        <h1>Oops, you see test error page</h1>
        <p className="error_info">{info}</p>
      </div>
    );
  }
}
export default ErrorTab;
