import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const HeroBanner: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "3.6rem",
        paddingBottom: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "min(60vh, 420px)",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${slides[index].image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65))",
          }}
        />
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            top: "50%",
            left: "1.2rem",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.45)",
            borderRadius: "999px",
            border: "none",
            width: 32,
            height: 32,
            color: "#ffffff",
          }}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          style={{
            position: "absolute",
            top: "50%",
            right: "1.2rem",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.45)",
            borderRadius: "999px",
            border: "none",
            width: 32,
            height: 32,
            color: "#ffffff",
          }}
        >
          ›
        </button>
      </div>
      <div className="container" style={{ marginTop: "1.4rem" }}>
        <p
          className="body-sm-muted"
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            letterSpacing: "0.06em",
          }}
        >
          {t("restaurantName")} — {t("restaurantSubtitle")}
        </p>
      </div>
    </section>
  );
};

