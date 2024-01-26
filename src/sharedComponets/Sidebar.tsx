import React, { useEffect } from "react";
import Progress from "./uiComponents/Progress";

interface SidebarProps {
  statesData: {
    state: any;
    positive: number;
    // ... other fields
  }[];
  selectedState: string;
  onSelectState: (state: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  statesData,
  selectedState,
  onSelectState,
}) => {
  useEffect(() => {
    // console.log(lastUSDay);
  }, []);

  return (
    <section className="hidden w-[30vw] mr-10 border border-gray-700 rounded-sm sidebar sm:block">
      <ul className="border-b border-gray-700 divide-y divide-gray-700">
        {statesData.map((stateData, index) => (
          <li key={index}>
            <button
              className={`p-4 w-full text-sm text-left focus:outline-none transition duration-150 ease-in-out ${
                selectedState === stateData.state.state ? "bg-gray-800" : ""
              } hover:bg-gray-800`}
              type="button"
              // onClick={() => onSelectState(stateData.state.state)}
            >
              <div className="flex justify-between mb-2">
                <span>{stateData.state.state}</span>
                <span>{stateData.state.positive}</span>
              </div>
              <Progress value={stateData.state.positive} total={6766095} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
