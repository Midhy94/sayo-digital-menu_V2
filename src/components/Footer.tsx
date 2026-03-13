import { useTranslation } from "react-i18next";
import type { Theme } from "../hooks/useTheme";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { i18n } = useTranslation();

  const theme = (document.documentElement.dataset.theme as Theme) || "dark";
  const isArabic = i18n.language === "ar";
  const logoSrc =
    theme === "light"
      ? isArabic
        ? "/assets/Logo_AR.svg"
        : "/assets/Logo_EN.svg"
      : isArabic
        ? "/assets/Logo_lgt_AR.svg"
        : "/assets/Logo_lgt_EN.svg";

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logoSrc} alt="SAYO" className="footer__logo" />
        <div>© {year} SAYO. All rights reserved.</div>
        <div className="footer__social">
          <a
            href="#"
            aria-label="Facebook"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer__icon footer__icon--round">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 8H15V5.5h-1.8C10.9 5.5 10 7.1 10 9.2V11H8v2.5h2v5.1h2.6V13.5H15L15.5 11H12v-1.6c0-.9.3-1.4 1.5-1.4Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer__icon footer__icon--round">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="6"
                  width="12"
                  height="12"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="16" cy="8" r="0.8" fill="currentColor" />
              </svg>
            </div>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer__icon footer__icon--round">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M11 10.5v3l3-1.5-3-1.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

