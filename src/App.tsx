import {useState, useEffect} from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { CityPage } from './pages/CityPage';
import { countries } from './data/countries';
import { Link } from './components/Link';
import { Plane } from 'lucide-react';

type Page = 'home' | 'country' | 'city';

interface AppState {
  page: Page;
  selectedCountryId: string | null;
  selectedCityId: string | null;
  scrollTarget?: string | null;
}
export default function App() {
  const [state, setState] = useState<AppState>({
    page: 'home',
    selectedCountryId: null,
    selectedCityId: null,
  });

  useEffect(() => {
    const handlePopState = () => {
      setState({
        page: 'home',
        selectedCountryId: null,
        selectedCityId: null,
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleCountryClick = (countryId: string) => {
    setState({
      page: 'country',
      selectedCountryId: countryId,
      selectedCityId: null,
    });
  };

  const handleCityClick = (cityId: string) => {
    setState((prev) => ({
      ...prev,
      page: 'city',
      selectedCityId: cityId,
    }));
  };

  const handleBackToHome = () => {
    setState({
      page: 'home',
      selectedCountryId: null,
      selectedCityId: null,
    });
  };

  const handleBackToCountry = () => {
    setState((prev) => ({
      ...prev,
      page: 'country',
      selectedCityId: null,
    }));
  };

  const selectedCountry = state.selectedCountryId
    ? countries.find((c) => c.id === state.selectedCountryId)
    : null;

  const selectedCity =
    selectedCountry && state.selectedCityId
      ? selectedCountry.cities.find((c) => c.id === state.selectedCityId)
      : null;

  return (
    <div className="min-h-screen">
      <Header />
      
      {state.page === 'home' && (
        <HomePage onCountryClick={handleCountryClick} />
      )}
      
   {state.page === 'country' && selectedCountry && (
  <CountryPage
    country={selectedCountry}
    onBack={handleBackToHome}
    onCityClick={handleCityClick}
  />
)}
      
      {state.page === 'city' && selectedCity && selectedCountry && (
        <CityPage
          city={selectedCity}
          country={selectedCountry}
          onBack={handleBackToCountry}
        />
      )}


      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TravelWorld
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Ваш надійний провідник у світі подорожей. Допомагаємо відкривати нові горизонти та створювати незабутні спогади.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg">Швидкі посилання</h4>
              <div className="space-y-3">
                <Link href="#main" className="block text-gray-400 hover:text-white transition-colors">
                  Головна
                </Link>
                <Link href="#country" className="block text-gray-400 hover:text-white transition-colors">
                  Країни
                </Link>
                <Link href="#about-us" className="block text-gray-400 hover:text-white transition-colors">
                  Про нас
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg">Зв'язатися з нами</h4>
              <div className="space-y-3 text-gray-400">
                <p>📧 info@travelworld.com</p>
                <p>📞 +380 (XX) XXX-XX-XX</p>
                <p>📍 Київ, Україна</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 TravelWorld. Всі права захищені. Туристичний портал для справжніх мандрівників 🌍✈️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}