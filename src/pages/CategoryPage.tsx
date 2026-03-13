import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DietaryTag,
  HighlightTag,
  getCategoryBySlug,
  getItemsForCategory,
  MenuItem,
} from "../data/menuData";
import { SearchBar } from "../components/SearchBar";
import { DishItem } from "../components/DishItem";
import { DishModal } from "../components/DishModal";
import { FilterDrawer } from "../components/FilterDrawer";
import { Footer } from "../components/Footer";

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const { t } = useTranslation();

  const [query, setQuery] = useState("");
  const [hiddenAllergens, setHiddenAllergens] = useState<DietaryTag[]>([]);
  const [highlightFilters, setHighlightFilters] = useState<HighlightTag[]>([]);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const items = category ? getItemsForCategory(category.id) : [];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (query.trim()) {
        const q = query.toLowerCase();
        if (
          !item.name.toLowerCase().includes(q) &&
          !item.description.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      if (hiddenAllergens.length && item.allergens?.length) {
        if (item.allergens.some((a) => hiddenAllergens.includes(a))) {
          return false;
        }
      }
      if (highlightFilters.length) {
        if (!item.tags?.some((t) => highlightFilters.includes(t))) {
          return false;
        }
      }
      return true;
    });
  }, [items, query, hiddenAllergens, highlightFilters]);

  useEffect(() => {
    const handleFocusSearch = () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
        searchInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    const handleOpenFilters = () => {
      setFiltersOpen(true);
    };

    window.addEventListener("sayo-focus-search", handleFocusSearch);
    window.addEventListener("sayo-open-filters", handleOpenFilters);

    return () => {
      window.removeEventListener("sayo-focus-search", handleFocusSearch);
      window.removeEventListener("sayo-open-filters", handleOpenFilters);
    };
  }, []);

  if (!category) {
    return null;
  }

  const hasActiveFilters = hiddenAllergens.length > 0 || highlightFilters.length > 0;

  return (
    <main className="layout">
      <section style={{ paddingTop: "3.2rem", paddingBottom: "0.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <header>
              <div className="pill">{t("allItems")}</div>
              <h1
                className="heading-xl"
                style={{ margin: "0.7rem 0 0.15rem", fontSize: "1.6rem" }}
              >
                {category.name}
              </h1>
              <p
                className="body-sm-muted"
                style={{ margin: 0, fontSize: "0.88rem" }}
              >
                {category.description}
              </p>
            </header>

            <SearchBar ref={searchInputRef} value={query} onChange={setQuery} />

            {hasActiveFilters && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                }}
              >
                {hiddenAllergens.map((a) => (
                  <span
                    key={a}
                    className="badge-outline"
                    style={{ borderColor: "rgba(255,255,255,0.18)" }}
                  >
                    ✕ {t(a)}
                  </span>
                ))}
                {highlightFilters.map((h) => (
                  <span
                    key={h}
                    className="badge-outline"
                    style={{ borderColor: "rgba(201,164,108,0.9)" }}
                  >
                    ★ {t(h)}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div
            className="card-surface scroll-y-soft"
            style={{
              maxHeight: "calc(100vh - 210px)",
              overflowY: "auto",
              paddingInline: "1rem",
              paddingTop: "0.2rem",
              paddingBottom: "1rem",
            }}
          >
            {filteredItems.map((item, index) => (
              <DishItem
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveItem(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <DishModal item={activeItem} onClose={() => setActiveItem(null)} />

      <FilterDrawer
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        hiddenAllergens={hiddenAllergens}
        onToggleAllergen={(tag) =>
          setHiddenAllergens((current) =>
            current.includes(tag) ? current.filter((x) => x !== tag) : [...current, tag],
          )
        }
        highlightFilters={highlightFilters}
        onToggleHighlight={(tag) =>
          setHighlightFilters((current) =>
            current.includes(tag) ? current.filter((x) => x !== tag) : [...current, tag],
          )
        }
        onClear={() => {
          setHiddenAllergens([]);
          setHighlightFilters([]);
        }}
      />
      <Footer />
    </main>
  );
};

