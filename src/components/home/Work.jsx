import { useNavigate } from 'react-router-dom';

const SedanIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <path
      d="M56 28H8l4-16h40l4 16zM12 44h40v8H12v-8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="16" cy="52" r="4" fill="currentColor" />
    <circle cx="48" cy="52" r="4" fill="currentColor" />
    <path
      d="M24 28l-4-12M40 28l4-12"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const SUVIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <path
      d="M56 36H8l4-20h40l4 20zM16 48h32v8H16v-8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="12" y="16" width="40" height="8" fill="currentColor" />
    <circle cx="20" cy="56" r="4" fill="currentColor" />
    <circle cx="44" cy="56" r="4" fill="currentColor" />
    <path
      d="M32 36l-4-16M40 36l4-16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const LuxuryIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <path
      d="M8 32h48L52 8H12L8 32zM16 48h32v8H16v-8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M24 32l-4-16M40 32l4-16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="20" cy="56" r="4" fill="currentColor" />
    <circle cx="44" cy="56" r="4" fill="currentColor" />
    <path
      d="M32 40l8-8-8-8-8 8 8 8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const SportIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <path
      d="M56 24L48 8H16L8 24v16h48V24zM16 48h32v8H16v-8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M24 24l-8-8M40 24l8-8"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="20" cy="56" r="4" fill="currentColor" />
    <circle cx="44" cy="56" r="4" fill="currentColor" />
    <path
      d="M32 28l-8 8h16l-8-8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const EconomyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <path
      d="M56 28H8l4-16h40l4 16zM12 44h40v8H12v-8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="16" cy="52" r="4" fill="currentColor" />
    <circle cx="48" cy="52" r="4" fill="currentColor" />
    <path
      d="M28 28H12M52 28H36"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const Categories = () => {
  const navigate = useNavigate();
  
  const categories = [
    { name: "Sedan", icon: SedanIcon, color: "text-blue-600" },
    { name: "SUV", icon: SUVIcon, color: "text-green-600" },
    { name: "Luxury", icon: LuxuryIcon, color: "text-amber-600" },
    { name: "Sports", icon: SportIcon, color: "text-red-600" }, // Fixed name to match Models
    { name: "Economy", icon: EconomyIcon, color: "text-emerald-600" },
  ];

  return (
    <section className="py-12 px-4 border-y bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Vehicle Categories
          </h2>
          <p className="text-gray-600 text-lg">
            Premium fleet selection for every need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/models?category=${category.name}`)}
              className="group flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-all cursor-pointer"
            >
              <div className={`mb-4 ${category.color}`}>
                <category.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {category.name}
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