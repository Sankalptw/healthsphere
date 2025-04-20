
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { indianCities, internationalCities } from '@/data/flights';

interface CityAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

const CityAutocomplete = ({ value, onChange, placeholder, label }: CityAutocompleteProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allCities = [...indianCities, ...internationalCities];

  useEffect(() => {
    const filtered = allCities.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  }, [value]);

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full rounded-md border border-input px-3 py-2 pl-10 text-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
      
      {showSuggestions && value && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {suggestions.map((city, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(city);
                setShowSuggestions(false);
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityAutocomplete;
