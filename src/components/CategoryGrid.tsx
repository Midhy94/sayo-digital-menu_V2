import { useTranslation } from "react-i18next";
import { categories } from "../data/menuData";
import { CategoryCard } from "./CategoryCard";

export const CategoryGrid: React.FC = () => {
  const { t } = useTranslation();

  const mainCategories = categories.filter((c) => c.group === "main");
  const specialCategories = categories.filter((c) => c.group === "special");
  const festiveCategories = categories.filter((c) => c.group === "festive");

  return (
    <>
      <section style={{ paddingBottom: "2.5rem" }}>
        <div className="container">
        {mainCategories.length > 0 && (
          <>
            <h2
              className="heading-lg"
              style={{
                margin: "0 0 0.75rem",
                fontSize: "1.05rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Menus
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.6rem",
              }}
            >
              {mainCategories.map((category, index) => (
                <div
                  key={category.id}
                  style={{ flex: "0 1 220px", maxWidth: 260 }}
                >
                  <CategoryCard category={category} index={index} />
                </div>
              ))}
            </div>
          </>
        )}

        {specialCategories.length > 0 && (
          <>
            <h3
              className="heading-lg"
              style={{
                margin: "0 0 0.75rem",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Special Menus
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.6rem",
              }}
            >
              {specialCategories.map((category, index) => (
                <div
                  key={category.id}
                  style={{ flex: "0 1 220px", maxWidth: 260 }}
                >
                  <CategoryCard category={category} index={index} />
                </div>
              ))}
            </div>
          </>
        )}

        {festiveCategories.length > 0 && (
          <>
            <h3
              className="heading-lg"
              style={{
                margin: "0 0 0.75rem",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Festive Menus
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {festiveCategories.map((category, index) => (
                <div
                  key={category.id}
                  style={{ flex: "0 1 220px", maxWidth: 260 }}
                >
                  <CategoryCard category={category} index={index} />
                </div>
              ))}
            </div>
          </>
        )}
        </div>
      </section>
      <section style={{ paddingBottom: "2.5rem" }}>
        <div className="container">
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
              padding: "2rem 1.8rem",
              backgroundColor: "var(--color-background-secondary)",
              marginInline: "auto",
            }}
          >
            <h2
              className="heading-lg"
              style={{
                margin: 0,
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              SAYO Jubail
            </h2>
            <div
              style={{
                marginTop: "0.8rem",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1.1fr)",
                gap: "1.5rem",
                fontSize: "0.85rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div style={{ fontWeight: 600 }}>Opening Hours</div>
                <div>5:30 PM – 3:00 AM · Sunday to Saturday</div>
                <div style={{ fontWeight: 600, marginTop: "0.6rem" }}>Phone</div>
                <a href="tel:+966000000000">+966 00 000 0000</a>
                <div style={{ fontWeight: 600, marginTop: "0.6rem" }}>Website</div>
                <a href="https://www.sayosaudi.com" target="_blank" rel="noreferrer">
                  www.sayosaudi.com
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div style={{ fontWeight: 600 }}>Address</div>
                <div>
                  Al Fanater District,
                  <br />
                  Jubail, Saudi Arabia
                </div>
                <div style={{ fontWeight: 600, marginTop: "0.6rem" }}>Other Locations</div>
                <a href="#">View more SAYO locations</a>
              </div>
            </div>
            <div
              style={{
                marginTop: "1.2rem",
                fontSize: "0.75rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Children aged 4–13 need 1,200–1,500 calories on average per day, and
              individual calorie needs may vary from one person to another. Adults need
              2,000 calories on average per day.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

