export type DietaryTag = "dairy" | "nuts" | "gluten" | "honey";

export type HighlightTag =
  | "chefSpecial"
  | "popular"
  | "new"
  | "chefSignature"
  | "vegan"
  | "vegetarian"
  | "containsEgg"
  | "nonVegetarian"
  | "hot"
  | "extraHot"
  | "japan"
  | "china"
  | "thailand"
  | "southKorea"
  | "malaysia"
  | "indonesia"
  | "vietnam"
  | "hawaii"
  | "singapore"
  | "india"
  | "lebanon";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  categoryId: string;
  section?: string;
  tags?: HighlightTag[];
  calories?: number;
  allergens?: DietaryTag[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  heroImage?: string;
  group: "main" | "special" | "festive";
}

export const categories: Category[] = [
  {
    id: "food-menu",
    slug: "food-menu",
    name: "Food Menu",
    description: "All-day dishes from dim sum to robata and curries.",
    group: "main",
  },
  {
    id: "kids-menu",
    slug: "kids-menu",
    name: "Kids Menu",
    description: "Gentle, comforting favourites tailored for smaller diners.",
    group: "main",
  },
  {
    id: "beverages",
    slug: "beverages",
    name: "Beverages",
    description: "Teas, infusions and crafted signatures, with and without spirits.",
    group: "main",
  },
  {
    id: "breakfast",
    slug: "breakfast",
    name: "Breakfast",
    description: "Morning bowls, bao and bright plates to begin the day.",
    group: "main",
  },
  {
    id: "special-evening",
    slug: "special-evening",
    name: "Chef's Special Menu",
    description: "Limited-run compositions curated nightly by the culinary team.",
    group: "special",
  },
  {
    id: "tasting-menu",
    slug: "tasting-menu",
    name: "Tasting Journey",
    description: "Multi-course progression through SAYO signatures.",
    group: "special",
  },
  {
    id: "ramadan-menu",
    slug: "ramadan-menu",
    name: "Ramadan Collection",
    description: "Seasonal dishes and desserts crafted for Ramadan evenings.",
    group: "festive",
  },
  {
    id: "festive-brunch",
    slug: "festive-brunch",
    name: "Festive Brunch",
    description: "Holiday brunch menu with sharing plates and warm sweets.",
    group: "festive",
  },
];

export const items: MenuItem[] = [
  {
    id: "tuna-crudo",
    name: "Citrus Tuna Crudo",
    description: "Line-caught tuna with yuzu kosho, pickled radish and smoked soy.",
    price: 85,
    categoryId: "food-menu",
    section: "Warm",
    calories: 220,
    tags: ["chefSpecial"],
    allergens: ["gluten"],
  },
  {
    id: "watermelon-tartare",
    name: "Watermelon Tartare",
    description: "Compressed watermelon, chili oil and black sesame with shiso.",
    price: 62,
    categoryId: "food-menu",
    section: "Warm",
    calories: 180,
    tags: ["popular"],
  },
  {
    id: "edamame-dumpling",
    name: "Truffle Edamame Dumpling",
    description: "Delicate dumplings in roasted mushroom broth and truffle aroma.",
    price: 64,
    categoryId: "food-menu",
    section: "Warm",
    calories: 240,
    tags: ["chefSpecial", "popular"],
    allergens: ["gluten"],
  },
  {
    id: "bao-short-rib",
    name: "Smoked Short Rib Bao",
    description: "Steamed bao with 12-hour short rib, pickled cucumber and gochujang mayo.",
    price: 72,
    categoryId: "food-menu",
    section: "Warm",
    calories: 320,
    tags: ["new"],
    allergens: ["gluten", "dairy"],
  },
  {
    id: "watermelon-tuna-roll",
    name: "Watermelon Tuna Roll",
    description: "Signature vegetarian roll with carved watermelon, black rice and nori.",
    price: 68,
    categoryId: "food-menu",
    section: "Warm",
    calories: 210,
    tags: ["chefSpecial"],
  },
  {
    id: "salmon-carpaccio",
    name: "Salmon Carpaccio",
    description: "Norwegian salmon with ginger ponzu, daikon and chive oil.",
    price: 78,
    categoryId: "food-menu",
    section: "Warm",
    calories: 230,
    allergens: ["gluten"],
  },
  {
    id: "robata-lobster",
    name: "Miso Butter Lobster",
    description: "Half lobster brushed with miso brown butter from the robata grill.",
    price: 165,
    categoryId: "food-menu",
    section: "Warm",
    calories: 540,
    tags: ["chefSpecial"],
    allergens: ["dairy"],
  },
  {
    id: "robata-corn",
    name: "Charred Corn Robata",
    description: "Baby corn with chili lime tare and smoked sea salt.",
    price: 54,
    categoryId: "food-menu",
    section: "Warm",
    calories: 190,
    tags: ["popular"],
  },
  {
    id: "butter-chicken",
    name: "Classic Butter Chicken",
    description: "Tandoori chicken simmered in tomato, fenugreek and cultured butter.",
    price: 96,
    categoryId: "food-menu",
    calories: 720,
    tags: ["popular"],
    allergens: ["dairy"],
  },
  {
    id: "green-curry",
    name: "Smoked Green Curry",
    description: "Thai green curry with charcoal-roasted vegetables and jasmine rice.",
    price: 89,
    categoryId: "food-menu",
    calories: 650,
  },
  {
    id: "mango-panna-cotta",
    name: "Mango Coconut Panna Cotta",
    description: "Silky coconut panna cotta with Alphonso mango and kaffir lime.",
    price: 54,
    categoryId: "food-menu",
    calories: 420,
    tags: ["popular"],
    allergens: ["dairy"],
  },
  {
    id: "black-sesame-ice",
    name: "Black Sesame Ice Cream",
    description: "House churned black sesame ice cream with miso caramel.",
    price: 48,
    categoryId: "food-menu",
    calories: 380,
    allergens: ["dairy", "nuts"],
  },
  {
    id: "jasmine-tea",
    name: "Jasmine Cloud Tea",
    description: "Slow brewed jasmine green tea with citrus steam.",
    price: 32,
    categoryId: "beverages",
    calories: 0,
  },
  {
    id: "yuzu-spritz",
    name: "Yuzu Highball Spritz",
    description: "Zero-proof spritz with yuzu, soda and ginger.",
    price: 44,
    categoryId: "beverages",
    calories: 90,
    tags: ["new"],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getItemsForCategory(categoryId: string) {
  return items.filter((item) => item.categoryId === categoryId);
}

