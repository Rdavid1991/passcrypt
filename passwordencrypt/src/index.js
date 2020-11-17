import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './component/App';
import { useUserContext } from './component/hooks/useUserContext';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);