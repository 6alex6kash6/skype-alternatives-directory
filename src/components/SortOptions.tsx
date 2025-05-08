'use client';

import React from 'react';

interface SortOptionsProps {
  sortOption: string;
  onSortChange: (option: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortOption,
  onSortChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort-reviews" className="text-sm text-gray-600">
        Sort reviews:
      </label>
      <select
        id="sort-reviews"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="text-sm border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
      >
        <option value="most-recent">Most Recent</option>
        <option value="highest-rating">Highest Rating</option>
        <option value="lowest-rating">Lowest Rating</option>
        <option value="most-helpful">Most Helpful</option>
      </select>
    </div>
  );
};

export default SortOptions;
