import './style.css';

interface ErrorInfo {
  info: string;
}
export default function ErrorTab(props: ErrorInfo) {
  const { info } = props;
  return (
    <div className="error_tab_block">
      <img src="src\assets\icons\errorIcon.png" alt="ErrorIcon" />
      <h1>Oops, you see test error page</h1>
      <p className="error_info">{info}</p>
    </div>
  );
}
