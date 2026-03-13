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
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        paddingBlock: "1.4rem",
        marginTop: "2rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "center",
          textAlign: "center",
          fontSize: "0.78rem",
          color: "var(--color-text-secondary)",
        }}
      >
        <img src={logoSrc} alt="SAYO" style={{ height: 26, opacity: 0.95 }} />
        <div>© {year} SAYO. All rights reserved.</div>
        <div
          style={{
            display: "flex",
            gap: "0.9rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            aria-label="Facebook"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
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
              </svg>
            </div>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </div>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="8"
                  width="16"
                  height="8"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M11 10.5v3l3-1.5-3-1.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

