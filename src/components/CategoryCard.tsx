import { motion } from "framer-motion";
import type { Category } from "../data/menuData";
import { Link } from "react-router-dom";

interface Props {
  category: Category;
  index: number;
}

export const CategoryCard: React.FC<Props> = ({ category, index }) => {
  return (
    <motion.article
      layout
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.03 * index }}
      style={{
        backgroundColor: "var(--color-background-secondary)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--color-border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        to={`/category/${category.slug}`}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
        aria-label={category.name}
      >
        <div
          style={{
            position: "relative",
            paddingTop: "62%",
            backgroundImage:
              "url('https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* image only, no overlay text */}
        </div>
        <div
          style={{
            padding: "0.85rem 0.95rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            flexGrow: 1,
          }}
        >
          <h3
            className="heading-lg"
            style={{
              margin: 0,
              fontSize: "1rem",
            }}
          >
            {category.name}
          </h3>
          <p
            className="body-sm-muted"
            style={{
              margin: 0,
              fontSize: "0.8rem",
            }}
          >
            {category.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

