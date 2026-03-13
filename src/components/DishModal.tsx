import { AnimatePresence, motion } from "framer-motion";
import type { MenuItem } from "../data/menuData";
import { useTranslation } from "react-i18next";
import { getCountryCodeForItem, isVegetarianSection, countryCodeToFlag } from "../data/menuData";
import { AppIcon } from "./AppIcon";

const COUNTRY_CODE_TO_I18N: Record<string, string> = {
  IN: "india", JP: "japan", TH: "thailand", CN: "china", KR: "southKorea",
  LB: "lebanon", VN: "vietnam", MY: "malaysia", ID: "indonesia", SG: "singapore", SA: "countrySA",
};

interface Props {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<Props> = ({ item, onClose }) => {
  const { t } = useTranslation();
  const isChefSignature = item?.tags?.includes("chefSignature");
  const countryCode = item ? getCountryCodeForItem(item) : undefined;
  const isVegetarian = item ? isVegetarianSection(item.section) : false;

  return (
    <AnimatePresence>
      {item && (
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
              background: "rgba(0,0,0,0.65)",
              zIndex: 260,
            }}
          />
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{
              position: "fixed",
              insetInline: "var(--space-lg)",
              top: "10vh",
              maxWidth: 520,
              marginInline: "auto",
              borderRadius: "1.25rem",
              background: "var(--color-background-secondary)",
              boxShadow: "var(--shadow-lg)",
              zIndex: 300,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                height: 210,
                backgroundImage:
                  "linear-gradient(145deg, rgba(201,164,108,0.25), transparent 55%), url('https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at top, rgba(0,0,0,0.18), transparent 55%), linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.8))",
                }}
              />
              <button
                type="button"
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: 12,
                  insetInlineEnd: 12,
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
              <div
                style={{
                  position: "absolute",
                  insetInline: 16,
                  bottom: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: "1rem",
                }}
              >
                <div>
                  {isChefSignature && (
                    <span className="dish-modal__signature-badge">
                      <AppIcon name="chefSignature" size={14} strokeWidth={2} aria-hidden />
                      {t("chefSignature")}
                    </span>
                  )}
                  <h2 className="card-heading" style={{ margin: 0, fontSize: "1.2rem" }}>
                    {item.name}
                  </h2>
                  <p
                    className="body-sm-muted"
                    style={{ margin: 0, marginTop: "0.25rem" }}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="dish-modal__price-wrap" style={{ textAlign: "right" }}>
                  <AppIcon name="price" size={18} strokeWidth={2} aria-hidden />
                  <span className="price">{typeof item.price === "string" ? item.price : item.price.toFixed(0)}</span>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1.1rem 1.2rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              <div className="dish-modal__meta">
                {countryCode && (
                  <span className="dish-modal__meta-item" title={COUNTRY_CODE_TO_I18N[countryCode] ? t(COUNTRY_CODE_TO_I18N[countryCode]) : countryCode}>
                    <span className="dish-modal__flag">{countryCodeToFlag(countryCode)}</span>
                  </span>
                )}
                {isVegetarian && (
                  <span className="dish-modal__meta-item dish-modal__veg" title={t("vegetarianDish")}>
                    <AppIcon name="vegetarian" size={18} strokeWidth={2} aria-hidden />
                  </span>
                )}
              </div>
              {item.calories != null && (
                <div className="dish-modal__calories-wrap body-sm-muted">
                  <AppIcon name="calories" size={18} strokeWidth={2} className="dish-modal__calories-icon" aria-hidden />
                  {item.calories} {t("calories")}
                </div>
              )}
              {item.allergens && item.allergens.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {item.allergens.map((a) => (
                    <span
                      key={a}
                      className="badge-outline"
                      style={{
                        borderColor: "rgba(255,255,255,0.2)",
                        fontSize: "0.7rem",
                      }}
                    >
                      {t(a)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

