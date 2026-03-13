import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HighlightTag, getCategoryBySlug, getItemsForCategory, MenuItem } from "../data/menuData";
import { DishItem } from "../components/DishItem";
import { DishModal } from "../components/DishModal";
import { FilterDrawer } from "../components/FilterDrawer";
import { Footer } from "../components/Footer";

const allFilterTags: HighlightTag[] = [
  "chefSignature",
  "vegan",
  "vegetarian",
  "containsEgg",
  "nonVegetarian",
  "hot",
  "extraHot",
  "japan",
  "china",
  "thailand",
  "southKorea",
  "malaysia",
  "indonesia",
  "vietnam",
  "hawaii",
  "singapore",
  "india",
  "lebanon",
];

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const { t } = useTranslation();

  const [query, setQuery] = useState("");
  const [highlightFilters, setHighlightFilters] = useState<HighlightTag[]>([]);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const items = category ? getItemsForCategory(category.id) : [];
  const filteredItems = items;

  const sections = useMemo(() => {
    const bySection = new Map<string, MenuItem[]>();
    filteredItems.forEach((item) => {
      const key = item.section || "";
      if (!bySection.has(key)) bySection.set(key, []);
      bySection.get(key)!.push(item);
    });
    return Array.from(bySection.entries());
  }, [filteredItems]);

  useEffect(() => {
    // reset search & filters on mount so lists are never accidentally empty
    setQuery("");
    setHighlightFilters([]);
    setFiltersOpen(false);

    const handleSearchQuery = (event: Event) => {
      const custom = event as CustomEvent<string>;
      setQuery(custom.detail ?? "");
    };

    const handleOpenFilters = () => {
      setFiltersOpen(true);
    };

    window.addEventListener("sayo-search-query", handleSearchQuery as EventListener);
    window.addEventListener("sayo-open-filters", handleOpenFilters);

    return () => {
      window.removeEventListener("sayo-search-query", handleSearchQuery as EventListener);
      window.removeEventListener("sayo-open-filters", handleOpenFilters);
    };
  }, []);

  if (!category) {
    return null;
  }

  const hasActiveFilters = highlightFilters.length > 0;

  return (
    <main className="layout">
      <section className="category-page__header">
        <div className="container">
          <div className="category-page__heading-block">
            <header>
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

            {hasActiveFilters && (
              <div className="category-page__chips">
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

            <div className="category-page__filters-bar">
              <div className="category-page__filters-row">
                <div className="category-page__filters-group">
                  <div className="category-page__filters-title">
                    {t("filters")}
                  </div>
                  <div className="category-page__filters-chips">
                    {allFilterTags.map((tag) => {
                      const active = highlightFilters.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          className={`category-page__filter-pill ${
                            active ? "category-page__filter-pill--active" : ""
                          }`}
                          onClick={() => {
                            setHighlightFilters((current) =>
                              current.includes(tag)
                                ? current.filter((x) => x !== tag)
                                : [...current, tag],
                            );
                          }}
                        >
                          {t(tag)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div
            className="scroll-y-soft category-page__list-shell"
          >
            {filteredItems.length === 0 ? (
              <p className="body-sm-muted" style={{ padding: "1rem 0.25rem" }}>
                {query.trim() || highlightFilters.length
                  ? t("noResultsWithFilters")
                  : t("noItemsInCategory")}
              </p>
            ) : (
              sections.map(([sectionName, sectionItems]) => (
                <section key={sectionName || "default"} className="category-page__section">
                  {sectionName && (
                    <h2 className="category-page__section-title">{sectionName}</h2>
                  )}
                  <div className="category-page__section-grid">
                    {sectionItems.map((item, index) => (
                      <DishItem
                        key={item.id}
                        item={item}
                        index={index}
                        onOpen={() => setActiveItem(item)}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </section>

      <DishModal item={activeItem} onClose={() => setActiveItem(null)} />

      <button
        type="button"
        className="category-page__filter-fab"
        onClick={() => setFiltersOpen(true)}
      >
        {t("filters")}
      </button>

      <FilterDrawer
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
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

