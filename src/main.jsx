import { StrictMode } from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import './index.css'
import App from './App.jsx'


class WebComponent extends HTMLElement {
  connectedCallback() {
    render(<React.StrictMode>
      <App />
    </React.StrictMode>, this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}

const ELEMENT_NAME = 'liferay-custom-card-slider';

if (customElements.get(ELEMENT_NAME)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ELEMENT_NAME}> (already registered)`);
} else {
  customElements.define(ELEMENT_NAME, WebComponent);
}