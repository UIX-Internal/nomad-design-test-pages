import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "Assets/Styles/Fontface.scss"
import 'Assets/Styles/Reset.scss'
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "Components/Module/i18n/locales";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/nomad-design-test-pages/">
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
)
