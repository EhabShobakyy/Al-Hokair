import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./LangBtn.css";
function LangBtn() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("en");
  const navigate = useNavigate("?language=en");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language, lang]);

  return (
    <div className="lang-btn">
      {lang === "en" ? (
        <button
          onClick={() => {
            setLang(i18n.changeLanguage("ar"));
            navigate({
              search: "?language=ar",
            });
          }}
        >
          عربي
        </button>
      ) : (
        <button
          onClick={() => {
            setLang(i18n.changeLanguage("en"));
            navigate({
              search: "?language=en",
            });
          }}
        >
          English
        </button>
      )}
    </div>
  );
}

export default LangBtn;
