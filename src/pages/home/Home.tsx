import React, { useEffect, useState } from "react";
import PageContainer from "../../sharedComponets/PageContainer";
import HistoricalDataChart from "../../components/historicalDataChart/HistoricalDataChart";
import Sidebar from "../../sharedComponets/Sidebar";
import StatisticsDisplay from "../../components/statisticsDisplay/StatisticsDisplay";
import { FaBars } from "react-icons/fa";
import { useWindowSize } from "react-use";

interface HomeProps {
  currentData: Record<string, any>;
  historicalData: Array<any>;
  states: Array<Record<string, any>>;
  isLoadingStates: boolean;
  selectedState: string;
  onSelectState: (state: string) => void;
  statesDailyData: Record<string, any[]>;
  updateChartData?: any;
}

const Home: React.FC<HomeProps> = ({
  currentData,
  historicalData,
  states,
  selectedState,
  onSelectState,
  statesDailyData,
}) => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 600);
  const [showDateRange, setShowDateRange] = useState(false);

  const statesData = states?.map((state: any) => ({
    state,
    positive: statesDailyData[state]?.[0]?.positive || 0,
  }));
  const [historical, setHistorical] = useState(historicalData);

  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    if (
      dateRange[0].startDate &&
      dateRange[0].endDate &&
      dateRange[0].startDate !== dateRange[0].endDate
    ) {
      setHistorical(
        historicalData.filter(
          (el) =>
            el.dateChecked >= dateRange[0]?.startDate?.toISOString() &&
            el.dateChecked <= dateRange[0]?.endDate?.toISOString()
        )
      );
    }
  }, [dateRange]);

  const windowSize = useWindowSize();
  useEffect(() => {
    let isMounted = true;
    if (windowSize.width <= 600) {
      if (isMounted) setShowSidebar(false);
    } else {
      if (isMounted) setShowSidebar(true);
    }
    return () => {
      isMounted = false;
    };
  }, [windowSize]);

  useEffect(() => {}, []);
  return (
    <PageContainer>
      <div className="flex">
        {windowSize.width < 600 && (
          <FaBars
            className="relative text-2xl cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        )}
      </div>

      {showSidebar && (
        <Sidebar
          windowSize={windowSize}
          statesData={statesData}
          selectedState={selectedState || ""}
          onSelectState={onSelectState}
        />
      )}

      <div
        className={
          windowSize.width < 600 && showSidebar
            ? "z-999 transition-all duration-300"
            : ""
        }
      >
        <StatisticsDisplay
          data={currentData}
          showDateRange={showDateRange}
          setShowDateRange={setShowDateRange}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <HistoricalDataChart data={historical} />
      </div>
    </PageContainer>
  );
};

export default Home;
