import React, { useState, useEffect } from "react";
import HistoricalDataChart from "../historicalDataChart/HistoricalDataChart";
import {
  ComparisonModuleContainer,
  Dropdown,
  OptionLabel,
  CheckboxWrapper,
  Checkbox,
} from "./DataComparisonModule.style";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface DataComparisonModuleProps {
  data: any[];
}

const DataComparisonModule: React.FC<DataComparisonModuleProps> = ({
  data,
}) => {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [comparisonData, setComparisonData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const filteredData = data.filter((entry) =>
      selectedStates.includes(entry.state)
    );
    setComparisonData(filteredData);
  }, [selectedStates, data]);

  const handleStateSelection = (state: string) => {
    setSelectedStates((prevSelectedStates) => {
      if (prevSelectedStates.includes(state)) {
        return prevSelectedStates.filter((s) => s !== state);
      } else {
        return [...prevSelectedStates, state];
      }
    });
  };

  return (
    <ComparisonModuleContainer className="p-4 md:p-8">
      <h3 className="mb-4 text-lg font-semibold md:text-xl">
        Data Comparison Module
      </h3>
      <Dropdown>
        <OptionLabel
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Select States for Comparison
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </OptionLabel>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <CheckboxWrapper>
                {data.map((entry) => (
                  <label key={entry.state} className="flex items-center mb-2">
                    <Checkbox
                      type="checkbox"
                      value={entry.state}
                      checked={selectedStates.includes(entry.state)}
                      onChange={() => handleStateSelection(entry.state)}
                    />
                    <span className="ml-2">{entry.state}</span>
                  </label>
                ))}
              </CheckboxWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </Dropdown>

      {selectedStates.length > 0 ? (
        <>
          <h4 className="mt-8 mb-4 text-lg font-semibold md:text-xl">
            Comparison Data:
          </h4>
          <div className="overflow-x-auto max-w-[90vw] mobileScreen:max-w-[80vw]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#38b2ac] text-white">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    State
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    Positive Cases
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    Negative Cases
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    Pending Cases
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    Hospitalizations
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    ICU Cases
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase md:text-sm">
                    Ventilator Cases
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#111827] text-white divide-y divide-gray-200">
                {comparisonData.map((entry) => (
                  <tr key={entry.state} className="hover:bg-[#38b2ac3d]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.state || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.positive || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.negative || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.pending || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.hospitalizedCurrently || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.inIcuCurrently || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry?.onVentilatorCurrently || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <HistoricalDataChart data={comparisonData} />
          </div>
        </>
      ) : (
        <p className="mt-8">Select states for comparison</p>
      )}
    </ComparisonModuleContainer>
  );
};

export default DataComparisonModule;
