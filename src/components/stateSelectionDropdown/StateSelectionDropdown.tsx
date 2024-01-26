// StateSelectionDropdown.tsx
import React, { ChangeEvent, useEffect } from "react";

interface StateSelectionDropdownProps {
  states: string[];
  onSelect: (stateCode: string) => void;
}

const StateSelectionDropdown: React.FC<StateSelectionDropdownProps> = ({
  states,
  onSelect,
}) => {
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value.toLowerCase());

    onSelect(e.target.value.toLowerCase());
  };
  useEffect(() => {
    console.log(states);
  });
  return (
    <div>
      <h3>Select State</h3>
      {/* {states && states.length > 0 ? (
        <select onChange={handleSelectionChange}>
          {states.map((state, index) => (
            <option key={`${state.state}_${index}`} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      ) : (
        <p>No states available.</p>
      )} */}
    </div>
  );
};

export default StateSelectionDropdown;
