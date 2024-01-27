import React, { ChangeEvent, useEffect } from "react";

interface StateSelectionDropdownProps {
  states: Array<Record<string, any>>;
  onSelect: (stateCode: string) => void;
}

const StateSelectionDropdown: React.FC<StateSelectionDropdownProps> = ({
  states,
  onSelect,
}) => {
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value.toLowerCase());
  };
  useEffect(() => {});
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
