// DataComparisonModule.tsx
import React from "react";

interface DataComparisonModuleProps {
  selectedStates: string[];
  onSelect: (selectedOptions: string[]) => void;
  data: any[]; // Your actual data structure
}

const DataComparisonModule: React.FC<DataComparisonModuleProps> = ({
  selectedStates,
  onSelect,
  data,
}) => {
  const handleSelection = (state: string) => {

    // Toggle the selection of the state
    const updatedSelection = selectedStates.includes(state)
      ? selectedStates.filter((selectedState) => selectedState !== state)
      : [...selectedStates, state];
    console.log({ updatedSelection });

    // Notify the parent component about the updated selection
    onSelect(updatedSelection);
  };

  return (
    <div>
      <h3>Data Comparison Module</h3>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Positive Cases</th>
            <th>Negative Cases</th>
            <th>Pending Cases</th>
            <th>Hospitalizations</th>
            <th>ICU Cases</th>
            <th>Ventilator Cases</th>
            {/* Add more columns based on your data structure */}
          </tr>
        </thead>
        <tbody>
          {selectedStates.map((state) => (
            <tr key={state}>
              <td>{state}</td>
              <td>{data.find((entry) => entry.state === state)?.positive}</td>
              <td>{data.find((entry) => entry.state === state)?.negative}</td>
              <td>{data.find((entry) => entry.state === state)?.pending}</td>
              <td>
                {
                  data.find((entry) => entry.state === state)
                    ?.hospitalizedCurrently
                }
              </td>
              <td>
                {data.find((entry) => entry.state === state)?.inIcuCurrently}
              </td>
              <td>
                {
                  data.find((entry) => entry.state === state)
                    ?.onVentilatorCurrently
                }
              </td>
              {/* Add more cells based on your data structure */}
              <td>
                <input
                  type="checkbox"
                  checked={selectedStates.includes(state)}
                  onChange={() => handleSelection(state)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataComparisonModule;
