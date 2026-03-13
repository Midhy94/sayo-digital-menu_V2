import { motion } from "framer-motion";
import type { MenuItem } from "../data/menuData";
import { useTranslation } from "react-i18next";

interface Props {
  item: MenuItem;
  onOpen: () => void;
  index: number;
}

const allergenIcons: Record<string, string> = {
  dairy: "🥛",
  nuts: "🌰",
  gluten: "🌾",
  honey: "🍯",
};

export const DishItem: React.FC<Props> = ({ item, onOpen, index }) => {
  const { t } = useTranslation();

  const tagLabel = item.tags?.[0]
    ? {
        chefSpecial: t("chefSpecial"),
        popular: t("popular"),
        new: t("new"),
      }[item.tags[0]]
    : undefined;

  const allergenRow =
    item.allergens && item.allergens.length
      ? item.allergens.map((a) => allergenIcons[a] || "●").join(" ")
      : "";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.9fr) 110px",
          gap: "0.9rem",
          padding: "1rem 1.1rem",
          borderRadius: "12px",
          border: "1px solid rgba(0, 0, 0, 0.04)",
          backgroundColor: "var(--color-background-secondary)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <div
              className="heading-lg"
              style={{
                fontSize: "0.98rem",
              }}
            >
              {item.name}
            </div>
            {tagLabel && (
              <span
                className="badge-outline"
                style={{
                  borderColor: "rgba(201,164,108,0.9)",
                  fontSize: "0.65rem",
                  paddingInline: "0.5rem",
                }}
              >
                {tagLabel}
              </span>
            )}
          </div>
          <p
            className="body-sm-muted"
            style={{
              margin: 0,
              fontSize: "0.82rem",
            }}
          >
            {item.description}
          </p>
          {allergenRow && (
            <div
              style={{
                marginTop: "0.2rem",
                fontSize: "0.8rem",
                opacity: 0.6,
              }}
            >
              {allergenRow}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.95rem",
            }}
          >
            ﷼ {item.price.toFixed(0)}
          </div>
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              width: "100%",
              minHeight: 70,
              backgroundImage:
                "url('https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </motion.button>
  );
};

