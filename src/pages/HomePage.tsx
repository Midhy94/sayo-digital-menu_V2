import { HeroBanner } from "../components/HeroBanner";
import { StorySection } from "../components/StorySection";
import { CategoryGrid } from "../components/CategoryGrid";
import { Footer } from "../components/Footer";

export const HomePage: React.FC = () => {
  return (
    <main className="layout">
      <HeroBanner />
      <StorySection />
      <CategoryGrid />
      <Footer />
    </main>
  );
};

