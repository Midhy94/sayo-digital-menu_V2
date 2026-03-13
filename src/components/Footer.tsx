import { useTranslation } from "react-i18next";
import type { Theme } from "../hooks/useTheme";
import { AppIcon } from "./AppIcon";

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
              <AppIcon name="facebook" size={20} strokeWidth={2} />
            </div>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer__icon footer__icon--round">
              <AppIcon name="instagram" size={20} strokeWidth={2} />
            </div>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer__icon footer__icon--round">
              <AppIcon name="youtube" size={20} strokeWidth={2} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

