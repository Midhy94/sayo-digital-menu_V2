import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ theme, onThemeChange, scrolled }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isCategoryPage = location.pathname.startsWith("/category/");

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

  const dispatchOpenFilters = () => {
    window.dispatchEvent(new Event("sayo-open-filters"));
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: Number.parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--z-navbar") || "100",
          10,
        ),
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled
          ? theme === "dark"
            ? "rgba(10,10,10,0.85)"
            : "rgba(247,245,242,0.92)"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "transparent",
        borderBottomLeftRadius: scrolled ? 18 : 0,
        borderBottomRightRadius: scrolled ? 18 : 0,
      }}
    >
      <div className="container" style={{ paddingBlock: "0.6rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoSrc}
              alt={t("restaurantName")}
              style={{ height: 32, width: "auto", display: "block" }}
            />
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {isCategoryPage && (
              <motion.button
                type="button"
                whileTap={{ scale: 0.94 }}
                onClick={dispatchFocusSearch}
                style={{
                  borderRadius: 999,
                  border: "1px solid var(--color-border)",
                  padding: "0.35rem 0.8rem",
                  background:
                    theme === "dark"
                      ? "rgba(15,15,15,0.92)"
                      : "rgba(255,255,255,0.92)",
                  color: "var(--color-text-primary)",
                  fontSize: "0.75rem",
                }}
              >
                {t("searchResults")}
              </motion.button>
            )}

            {isCategoryPage && (
              <motion.button
                type="button"
                whileTap={{ scale: 0.94 }}
                onClick={dispatchOpenFilters}
                style={{
                  borderRadius: 999,
                  border: "1px solid var(--color-border)",
                  padding: "0.35rem 0.8rem",
                  background:
                    theme === "dark"
                      ? "rgba(15,15,15,0.92)"
                      : "rgba(255,255,255,0.92)",
                  color: "var(--color-text-primary)",
                  fontSize: "0.75rem",
                }}
              >
                {t("filters")}
              </motion.button>
            )}

            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={toggleLanguage}
              style={{
                borderRadius: 999,
                border: "1px solid var(--color-border)",
                padding: "0.35rem 0.8rem",
                background:
                  theme === "dark"
                    ? "rgba(15,15,15,0.92)"
                    : "rgba(255,255,255,0.92)",
                color: "var(--color-text-primary)",
                fontSize: "0.75rem",
              }}
            >
              {i18n.language === "ar" ? "EN" : "AR"}
            </motion.button>

            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                border: "1px solid var(--color-border)",
                background:
                  theme === "dark"
                    ? "rgba(15,15,15,0.92)"
                    : "rgba(255,255,255,0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-primary)",
                fontSize: "0.9rem",
              }}
            >
              {theme === "dark" ? "☾" : "☼"}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

