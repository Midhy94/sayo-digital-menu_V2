import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      restaurantName: "SAYO",
      restaurantSubtitle: "Pan Asian Restaurant",
      storyTitle: "Born at Night. Crafted for the Senses.",
      storyBody:
        "SAYO brings the energy of Asia's night markets and neon-lit alleys into a refined dining room experience. From precise sushi to slow-fired curries, every plate is composed with balance, texture, and quiet theater.",
      categoriesTitle: "Explore the Menu",
      searchPlaceholder: "Search dishes by name or description",
      filters: "Filters",
      clearFilters: "Clear filters",
      dietaryPreferences: "Dietary preferences",
      showOnly: "Show only",
      chefSpecial: "Chef's Selection",
      popular: "Popular",
      new: "New",
      hideWith: "Hide dishes with",
      dairy: "Dairy",
      nuts: "Nuts",
      gluten: "Gluten",
      honey: "Honey",
      calories: "kcal",
      close: "Close",
      viewDetails: "View details",
      searchResults: "Search results",
      allItems: "All items",
    },
  },
  ar: {
    translation: {
      restaurantName: "سايو",
      restaurantSubtitle: "مطعم آسيوي معاصر",
      storyTitle: "وُلد في الليل، وصُنع للحواس.",
      storyBody:
        "سايو يجمع حيوية أسواق آسيا الليلية مع تجربة طعام راقية. من السوشي الدقيق إلى الكاري المطهو ببطء، يُقدَّم كل طبق بتوازن مدروس وتفاصيل أنيقة.",
      categoriesTitle: "استكشف القائمة",
      searchPlaceholder: "ابحث عن الأطباق بالاسم أو الوصف",
      filters: "التصفية",
      clearFilters: "مسح التصفية",
      dietaryPreferences: "تفضيلات غذائية",
      showOnly: "عرض فقط",
      chefSpecial: "اختيار الشيف",
      popular: "الأكثر طلباً",
      new: "جديد",
      hideWith: "إخفاء الأطباق التي تحتوي على",
      dairy: "ألبان",
      nuts: "مكسرات",
      gluten: "جلوتين",
      honey: "عسل",
      calories: "سعرة حرارية",
      close: "إغلاق",
      viewDetails: "التفاصيل",
      searchResults: "نتائج البحث",
      allItems: "كل الأطباق",
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;

