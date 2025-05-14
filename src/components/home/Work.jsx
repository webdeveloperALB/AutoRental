import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SedanIcon = () => (
  <img src="/sedan2.png" alt="Sedan" className="w-50 h-30" />
);
const SUVIcon = () => <img src="/suv2.png" alt="SUV" className="w-50 h-30" />;
const LuxuryIcon = () => (
  <img src="/luxury1.png" alt="Luxury" className="w-50 h-30" />
);
const SportIcon = () => (
  <img src="/sports2.png" alt="Sport" className="w-50 h-30" />
);
const EconomyIcon = () => (
  <img src="/economic1.png" alt="Economy" className="w-50 h-30" />
);

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categories = [
    { name: "Sedan", icon: SedanIcon, color: "text-blue-600" },
    { name: "SUV", icon: SUVIcon, color: "text-green-600" },
    { name: "Luxury", icon: LuxuryIcon, color: "text-amber-600" },
    { name: "Sports", icon: SportIcon, color: "text-red-600" },
    { name: "Economy", icon: EconomyIcon, color: "text-emerald-600" },
  ];

  const handleCategoryClick = (categoryName) => {
    // Navigate to models with the selected category as a URL parameter
    navigate(`/models?categories=${categoryName}`);
  };

  return (
    <section className="py-12 px-4 border-y bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t("vehicleCategories")}
          </h2>
          <p className="text-gray-600 text-lg">{t("fleetSelectionText")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="group flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-all cursor-pointer"
            >
              <div className={`mb-4 ${category.color}`}>
                <category.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {t(category.name.toLowerCase())}
              </h3>
              <div className="w-8 h-0.5 bg-gray-200 group-hover:bg-current transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;