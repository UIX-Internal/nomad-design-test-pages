import { Routes, Route, useLocation } from "react-router-dom";
import Home from "Components/Pages/Home/Home";
import PageNotFound from "Components/Pages/Error/PageNotFound";
import React, { useEffect } from "react";
import i18n from "Components/Module/i18n/locales";

function App() {
  let location = useLocation()

  useEffect(() => {
    let language = sessionStorage.getItem("language");

    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    if (language) {
      i18n.changeLanguage(language);
    }

  }, []);
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </div>



  );
}

export default App;
