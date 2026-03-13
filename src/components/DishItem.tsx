import { motion } from "framer-motion";
import type { MenuItem } from "../data/menuData";
import { useTranslation } from "react-i18next";

interface Props {
  item: MenuItem;
  onOpen: () => void;
  index: number;
}

export const DishItem: React.FC<Props> = ({ item, onOpen, index }) => {
  const { t } = useTranslation();

  const tagLabel = item.tags?.[0]
    ? {
        chefSpecial: t("chefSpecial"),
        popular: t("popular"),
        new: t("new"),
      }[item.tags[0]]
    : undefined;

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
          gridTemplateColumns: "minmax(0, 1.9fr) 76px",
          gap: "0.85rem",
          paddingBlock: "0.8rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <div
              className="heading-lg"
              style={{ fontSize: "0.98rem", letterSpacing: "0.04em" }}
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
              fontSize: "0.8rem",
            }}
          >
            {item.description}
          </p>
          {item.calories && (
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--color-text-secondary)",
              }}
            >
              {item.calories} {t("calories")}
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "0.4rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
            }}
          >
            {item.price.toFixed(0)} SAR
          </div>
          <div
            style={{
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              width: "100%",
              minHeight: 56,
              backgroundImage:
                "linear-gradient(135deg, rgba(201,164,108,0.22), transparent 60%), url('https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </motion.button>
  );
};

