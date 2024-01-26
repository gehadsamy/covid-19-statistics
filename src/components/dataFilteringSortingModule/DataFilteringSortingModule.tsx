import React, { useState, ChangeEvent } from "react";

interface DataFilteringSortingModuleProps {
  onFilter: (filterValue: string) => void;
  onSort: (sortOption: string) => void;
}

const DataFilteringSortingModule: React.FC<DataFilteringSortingModuleProps> = ({
  onFilter,
  onSort,
}) => {
  const [filterValue, setFilterValue] = useState("");
  const [sortOption, setSortOption] = useState("");

  let filterTimer: NodeJS.Timeout;

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    clearTimeout(filterTimer);
    filterTimer = setTimeout(() => {
      onFilter(value);
    }, 300); // Debounce the filter function with a delay of 300 milliseconds
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSort(selectedOption);
  };

  return (
    <div>
      <h3>Data Filtering and Sorting</h3>
      <div>
        <p>Filter by:</p>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>
      <div>
        <p>Sort by:</p>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">-- Select Option --</option>
          <option value="positive">Positive Cases</option>
          <option value="negative">Negative Cases</option>
          {/* Add more sorting options based on your data */}
        </select>
      </div>
    </div>
  );
};

export default DataFilteringSortingModule;
