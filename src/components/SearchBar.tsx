import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange }, inputRef) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        padding: "0.55rem 0.9rem",
        borderRadius: 999,
        border: "1px solid var(--color-border)",
        background: "var(--color-background-secondary)",
      }}
    >
      <span
        aria-hidden
        style={{
          fontSize: "0.9rem",
          color: "var(--color-text-secondary)",
        }}
      >
        ⌕
      </span>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("searchPlaceholder")}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          color: "var(--color-text-primary)",
          fontSize: "0.88rem",
        }}
      />
    </div>
  );
},
);

SearchBar.displayName = "SearchBar";

