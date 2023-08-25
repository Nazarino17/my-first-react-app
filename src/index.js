import React, {StrictMode} from 'react'; // импорт библиотек
import ReactDOM from 'react-dom'; // импорт библиотек
import './index.css'; // импорт стилей
import App from './components/app/app';


ReactDOM.render(
    <StrictMode>
      <App/>
    </StrictMode>,
  document.getElementById('root')
);

