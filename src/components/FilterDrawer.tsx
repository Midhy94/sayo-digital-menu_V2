import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { DietaryTag, HighlightTag } from "../data/menuData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  hiddenAllergens: DietaryTag[];
  onToggleAllergen: (tag: DietaryTag) => void;
  highlightFilters: HighlightTag[];
  onToggleHighlight: (tag: HighlightTag) => void;
  onClear: () => void;
}

const dietaryTags: DietaryTag[] = ["dairy", "nuts", "gluten", "honey"];
const highlightTags: HighlightTag[] = ["chefSpecial", "popular", "new"];

export const FilterDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  hiddenAllergens,
  onToggleAllergen,
  highlightFilters,
  onToggleHighlight,
  onClear,
}) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.56)",
              zIndex: 250,
            }}
          />
          <motion.aside
            key="drawer"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              borderTopLeftRadius: "1.2rem",
              borderTopRightRadius: "1.2rem",
              background: "var(--color-background-secondary)",
              boxShadow: "var(--shadow-lg)",
              zIndex: 300,
              padding: "1.1rem 1.1rem 1.25rem",
            }}
          >
            <div
              style={{
                width: 44,
                height: 4,
                borderRadius: 999,
                background: "var(--color-border)",
                margin: "0 auto 0.8rem",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.75rem",
              }}
            >
              <div
                className="heading-lg"
                style={{ fontSize: "1rem", letterSpacing: "0.08em" }}
              >
                {t("filters")}
              </div>
              <button
                type="button"
                onClick={onClear}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--color-text-secondary)",
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                }}
              >
                {t("clearFilters")}
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <section>
                <div
                  style={{
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {t("hideWith")}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                  }}
                >
                  {dietaryTags.map((tag) => {
                    const active = hiddenAllergens.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => onToggleAllergen(tag)}
                        style={{
                          borderRadius: 999,
                          padding: "0.25rem 0.7rem",
                          border: active
                            ? "1px solid var(--color-accent-primary)"
                            : "1px solid var(--color-border)",
                          background: active
                            ? "rgba(201,164,108,0.14)"
                            : "var(--color-background-secondary)",
                          color: "var(--color-text-primary)",
                          fontSize: "0.78rem",
                        }}
                      >
                        {t(tag)}
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <div
                  style={{
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {t("showOnly")}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                  }}
                >
                  {highlightTags.map((tag) => {
                    const active = highlightFilters.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => onToggleHighlight(tag)}
                        style={{
                          borderRadius: 999,
                          padding: "0.25rem 0.7rem",
                          border: active
                            ? "1px solid var(--color-accent-primary)"
                            : "1px solid var(--color-border)",
                          background: active
                            ? "rgba(201,164,108,0.18)"
                            : "var(--color-background-secondary)",
                          color: "var(--color-text-primary)",
                          fontSize: "0.78rem",
                        }}
                      >
                        {t(tag)}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

