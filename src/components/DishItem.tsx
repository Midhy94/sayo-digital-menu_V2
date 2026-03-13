import { motion } from "framer-motion";
import type { MenuItem } from "../data/menuData";
import type { DietaryTag } from "../data/menuData";
import { useTranslation } from "react-i18next";
import { getCountryCodeForItem, isVegetarianSection, countryCodeToFlag } from "../data/menuData";
import { AppIcon, getDietaryIconName } from "./AppIcon";
import { IconWithTooltip } from "./IconWithTooltip";

const COUNTRY_CODE_TO_I18N: Record<string, string> = {
  IN: "india",
  JP: "japan",
  TH: "thailand",
  CN: "china",
  KR: "southKorea",
  LB: "lebanon",
  VN: "vietnam",
  MY: "malaysia",
  ID: "indonesia",
  SG: "singapore",
  SA: "countrySA",
};

const SPICE_LABELS: Record<number, string> = {
  0: "spiceLevelMild",
  1: "spiceLevelMedium",
  2: "spiceLevelHot",
  3: "spiceLevelExtraHot",
};

interface Props {
  item: MenuItem;
  onOpen: () => void;
  index: number;
}

export const DishItem: React.FC<Props> = ({ item, onOpen, index }) => {
  const { t } = useTranslation();

  const firstTag = item.tags?.[0];
  const tagLabel = firstTag
    ? {
        chefSpecial: t("chefSpecial"),
        chefSignature: t("chefSignature"),
        popular: t("popular"),
        new: t("new"),
      }[firstTag]
    : undefined;
  const isChefSignature = firstTag === "chefSignature";

  const allergenList = item.allergens ?? [];
  const countryCode = getCountryCodeForItem(item);
  const isVegetarian = isVegetarianSection(item.section);
  const spiceLevel = item.spiceLevel ?? (item.tags?.includes("extraHot") ? 3 : item.tags?.includes("hot") ? 2 : undefined);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.02 * index }}
      whileTap={{ scale: 0.98 }}
      style={{
        width: "100%",
        textAlign: "left",
        border: "none",
        background: "transparent",
        padding: 0,
      }}
    >
      <div className={`dish-item__card ${isChefSignature ? "dish-item__card--signature" : ""}`}>
        <div className="dish-item__image" />
        <div className="dish-item__content">
          <div className="dish-item__title-row">
            <h3 className="dish-item__heading">{item.name}</h3>
            <div className="dish-item__price-wrap">
              <AppIcon name="price" size={14} strokeWidth={2} className="dish-item__price-icon" aria-hidden />
              <span className="price dish-item__price">
                {typeof item.price === "string" ? item.price : item.price.toFixed(0)}
              </span>
            </div>
          </div>
          {tagLabel && (
            <span
              className={`dish-item__pill ${isChefSignature ? "dish-item__pill--signature" : ""}`}
            >
              {isChefSignature && (
                <AppIcon name="chefSignature" size={12} strokeWidth={2} className="dish-item__pill-icon" aria-hidden />
              )}
              {tagLabel}
            </span>
          )}
          <p className="dish-item__description">{item.description}</p>
          <div className="dish-item__meta">
            {countryCode && (
              <IconWithTooltip
                label={COUNTRY_CODE_TO_I18N[countryCode] ? t(COUNTRY_CODE_TO_I18N[countryCode]) : countryCode}
              >
                <span className="dish-item__flag" aria-hidden>{countryCodeToFlag(countryCode)}</span>
              </IconWithTooltip>
            )}
            {isVegetarian && (
              <IconWithTooltip label={t("vegetarianDish")}>
                <AppIcon name="vegetarian" size={16} strokeWidth={2} className="dish-item__veg-icon" aria-hidden />
              </IconWithTooltip>
            )}
            {spiceLevel != null && (
              <IconWithTooltip label={t(SPICE_LABELS[spiceLevel] ?? "spiceLevelMild")}>
                <span className="dish-item__spice" aria-hidden>
                  {[1, 2, 3].slice(0, Math.max(1, spiceLevel + 1)).map((i) => (
                    <AppIcon key={i} name="hot" size={12} strokeWidth={2} aria-hidden />
                  ))}
                </span>
              </IconWithTooltip>
            )}
            {item.calories != null && (
              <IconWithTooltip label={`${item.calories} ${t("calories")}`}>
                <span className="dish-item__calories-wrap">
                  <AppIcon name="calories" size={14} strokeWidth={2} className="dish-item__calories-icon" aria-hidden />
                  <span className="dish-item__calories">{item.calories} {t("calories")}</span>
                </span>
              </IconWithTooltip>
            )}
          </div>
          {allergenList.length > 0 && (
            <div className="dish-item__allergens">
              {allergenList.map((a) => (
                <AppIcon
                  key={a}
                  name={getDietaryIconName(a as DietaryTag)}
                  size={14}
                  strokeWidth={2}
                  aria-hidden
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
};

