import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "normalize.css"
import "./i18n"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
