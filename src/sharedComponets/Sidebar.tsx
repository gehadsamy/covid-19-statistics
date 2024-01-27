import React, { useState } from "react";
import Progress from "./uiComponents/Progress";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

interface SidebarProps {
  statesData: {
    state: any;
    positive: number;
    negative: number;
    death: number;
  }[];
  selectedState: string;
  onSelectState: (state: string) => void;
  windowSize: any;
}

const Sidebar: React.FC<SidebarProps> = ({
  statesData,
  selectedState,
  onSelectState,
  windowSize,
}) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [filterBy, setFilterBy] = useState("positive");

  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(e.target.value);
  };

  const sortedStatesData = [...statesData].sort((a, b) => {
    let aValue, bValue;
    if (filterBy === "positive") {
      aValue = a.state.positive;
      bValue = b.state.positive;
    } else if (filterBy === "negative") {
      aValue = a.state.negative;
      bValue = b.state.negative;
    } else if (filterBy === "death") {
      aValue = a.state.death;
      bValue = b.state.death;
    } else {
      aValue = a.state.state;
      bValue = b.state.state;
    }

    if (sortAscending) {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  return (
    <section
      className={`${
        windowSize.width >= 600 ? "hidden" : ""
      } w-[30vw] mobileScreen:w-[90vw] mobileScreen:absolute mobileScreen:z-999 mobileScreen:bg-[#101623] mr-10 border border-gray-700 rounded-sm sidebar sm:block h-[80vh] overflow-y-scroll`}
    >
      <div className="flex items-center justify-between p-2">
        <h2>States Data</h2>
        <div className="flex items-center">
          <select
            className="p-2 mr-2 text-gray-900 border border-gray-300 rounded"
            value={filterBy}
            onChange={handleFilterChange}
          >
            <option value="positive">Positive Cases</option>
            <option value="negative">Negative Cases</option>
            <option value="death">Death</option> {/* Add death option */}
          </select>
          <button onClick={handleSort} className="text-gray-600">
            {sortAscending ? <FaSortAmountUp /> : <FaSortAmountDown />}
          </button>
        </div>
      </div>
      <ul className="border-b border-gray-700 divide-y divide-gray-700">
        {sortedStatesData.map((stateData, index) => (
          <li key={index}>
            <button
              className={`p-4 w-full text-sm text-left focus:outline-none transition duration-150 ease-in-out ${
                selectedState === stateData.state.state ? "bg-gray-800" : ""
              } hover:bg-gray-800`}
              type="button"
              onClick={() => onSelectState(stateData.state.state)}
            >
              <div className="flex justify-between mb-2">
                <span>{stateData.state.state}</span>
                <span>
                  {filterBy === "positive"
                    ? stateData.state?.positive || "-"
                    : filterBy === "negative"
                    ? stateData.state?.negative || "-"
                    : filterBy === "death"
                    ? stateData.state?.death || "-"
                    : "-"}
                </span>
              </div>
              <Progress
                value={
                  filterBy === "positive"
                    ? stateData.state.positive
                    : filterBy === "negative"
                    ? stateData.state.negative
                    : filterBy === "death"
                    ? stateData.state.death
                    : 0
                }
                total={6766092}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
