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
      className="category-card"
    >
      <Link
        to={`/category/${category.slug}`}
        className="category-card__link"
        aria-label={category.name}
      >
        <div
          className="category-card__media"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=800')",
          }}
        >
          {/* image only, no overlay text */}
        </div>
        <div
          className="category-card__body"
        >
          <h3
            className="heading-lg category-card__title"
          >
            {category.name}
          </h3>
          <p
            className="body-sm-muted category-card__description"
          >
            {category.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

