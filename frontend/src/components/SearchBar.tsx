"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

const suggestionsList = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Watermelon",
  "Mango",
  "Pineapple",
  "Blueberry",
  "Cherry",
];

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  return (
    <div className="relative w-96">
      <div className="relative">
        <Search className="absolute left-3 top-2 text-[#898989]" size={18} />
        <input
          type="text"
          placeholder="Tapez une ville, un département ..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full pl-10 pt-[0.40rem] py-1 border placeholder:text-[#898989] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
        />
      </div>

      {searchTerm && filteredSuggestions.length > 0 && (
        <ul className="absolute w-full bg-white border mt-1 rounded-lg shadow-md">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setSearchTerm(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
