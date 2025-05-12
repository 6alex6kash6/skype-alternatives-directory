"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { softwareData } from "@/data/software";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");
  const hasSearchQuery = Boolean(searchParams.get("q"));

  useEffect(() => {
    // Update input value when URL changes
    setInputValue(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (inputValue.trim()) {
      params.set("q", inputValue.trim());
    } else {
      params.delete("q");
    }
    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setInputValue("");
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <input
        type="text"
        placeholder={`Search across ${softwareData.length} alternatives...`}
        className="px-6 py-3 rounded-lg text-gray-800 w-full md:w-auto flex-grow max-w-md"
        value={inputValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setInputValue(newValue);
          if (!newValue.trim()) {
            handleClear();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        className="px-8 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition duration-200"
        onClick={hasSearchQuery ? handleClear : handleSearch}
      >
        {hasSearchQuery ? "Clear" : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
