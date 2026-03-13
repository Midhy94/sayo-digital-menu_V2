import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Theme } from "../hooks/useTheme";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ theme, onThemeChange, scrolled }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isCategoryPage = location.pathname.startsWith("/category/");
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const isArabic = i18n.language === "ar";
  const logoSrc =
    theme === "light"
      ? isArabic
        ? "/assets/Logo_AR.svg"
        : "/assets/Logo_EN.svg"
      : isArabic
        ? "/assets/Logo_lgt_AR.svg"
        : "/assets/Logo_lgt_EN.svg";

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
  };

  const toggleTheme = () => {
    onThemeChange(theme === "dark" ? "light" : "dark");
  };

  const dispatchFocusSearch = () => {
    window.dispatchEvent(new Event("sayo-focus-search"));
  };

  return (
    <header
      className={`header ${scrolled ? "header--scrolled" : ""} ${
        theme === "light" ? "header--light" : "header--dark"
      }`}
    >
      <div className="container">
        <div className="header__inner">
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logoSrc}
                alt={t("restaurantName")}
                style={{ height: 32, width: "auto", display: "block" }}
              />
            </Link>

            {isCategoryPage && (
              <motion.button
                type="button"
                whileTap={{ scale: 0.94 }}
                onClick={() => navigate(-1)}
                className="header__chip"
              >
                ← {t("categoriesTitle")}
              </motion.button>
            )}
          </div>

          <div className="header__actions">
            {isCategoryPage && (
              <div style={{ maxWidth: 220, flex: 1 }}>
                <SearchBar
                  value={searchValue}
                  onChange={(value) => {
                    setSearchValue(value);
                    window.dispatchEvent(
                      new CustomEvent("sayo-search-query", { detail: value }),
                    );
                  }}
                />
              </div>
            )}
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={toggleLanguage}
              className="header__lang"
            >
              {i18n.language === "ar" ? "EN" : "AR"}
            </motion.button>

            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="header__theme"
            >
              {theme === "dark" ? "☾" : "☼"}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

