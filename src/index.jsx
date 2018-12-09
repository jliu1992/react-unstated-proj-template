import React from 'react';
import { render } from 'react-dom';
import App from './App';

function renderApp() {
  const mountNode = document.getElementById('app');
  render(<App />, mountNode);
}

renderApp();

module.hot.accept(renderApp);
