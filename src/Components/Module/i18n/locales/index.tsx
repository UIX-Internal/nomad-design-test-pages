// import React from "react";
// import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/en.json';
import ko from './ko/ko.json';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: { translations: en },
            ko: { translations: ko }
        },
        lng: "en", // 기본 언어 사용
        fallbackLng: "en",

        ns: ["translations"],

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
