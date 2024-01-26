import React, { useEffect } from "react";
import PageContainer from "../../sharedComponets/PageContainer";
import HistoricalDataChart from "../../components/historicalDataChart/HistoricalDataChart";
import Sidebar from "../../sharedComponets/Sidebar";

interface HomeProps {
  states: string[];
  isLoadingStates: boolean;
  selectedState: string;
  onSelectState: (state: string) => void;
  statesDailyData: Record<string, any[]>;
  data: any[]; // Assuming data contains information about positive cases for each state
}

const Home: React.FC<HomeProps> = ({
  states,
  isLoadingStates,
  selectedState,
  onSelectState,
  statesDailyData,
  data,
}) => {
  const statesData = states.map((state) => ({
    state,
    positive: statesDailyData[state]?.[0]?.positive || 0,
  }));
  useEffect(() => {
    // console.log(usDailyData);
  });
  return (
    <PageContainer>
      <Sidebar
        statesData={statesData}
        selectedState={selectedState || ""}
        onSelectState={onSelectState}
  
      />
      <HistoricalDataChart data={data}  />
    </PageContainer>
  );
};

export default Home;
