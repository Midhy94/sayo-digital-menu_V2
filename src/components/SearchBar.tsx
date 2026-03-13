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
    <div className="search-bar">
      <span
        aria-hidden
        className="search-bar__icon"
      >
        ⌕
      </span>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className="search-bar__input"
      />
    </div>
  );
},
);

SearchBar.displayName = "SearchBar";

