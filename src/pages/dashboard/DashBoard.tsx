import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataComparisonModule from "../../components/dataComparisonModule/DataComparisonModule";
import DataFilteringSortingModule from "../../components/dataFilteringSortingModule/DataFilteringSortingModule";
import StateSelectionDropdown from "../../components/stateSelectionDropdown/StateSelectionDropdown";
import StatisticsDisplay from "../../components/statisticsDisplay/StatisticsDisplay";
import Home from "../home/Home";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/customHooks/useAppDispatch";
import {
  fetchAllStatesData,
  fetchSpecificStateData,
} from "../../services/store/slices/covidDataSlice";

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.covidData);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedStatesForComparison, setSelectedStatesForComparison] =
    useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchAllStatesData());
  }, [dispatch]);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  useEffect(() => {
    if (selectedState) {
      dispatch(fetchSpecificStateData(selectedState));
    }
  }, [dispatch, selectedState]);

  const handleStateSelection = (stateCode: string) => {
    setSelectedState(stateCode);
  };

  const handleComparisonSelection = (selectedOptions: string[]) => {
    setSelectedStatesForComparison(selectedOptions);
  };

  const handleFilter = (filterValue: string) => {
    console.log("Filtering by:", filterValue);
  };

  const handleSort = (sortOption: string) => {
    console.log("Sorting by:", sortOption);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
 const updateChartData = async (selectedState: string) => {
    // You should implement the logic to fetch data for the selected state
    // For example, you can dispatch an action to fetch specific state data
    try {
      await dispatch(fetchSpecificStateData(selectedState));
    } catch (error) {
      console.error("Error fetching specific state data:", error);
    }
  };
  const statesDailyData: Record<string, any[]> = {};
  return (
    <Router>
      <section
        className="grid min-h-screen antialiased text-gray-300 bg-gray-900"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <h2 className="">COVID-19 Dashboard</h2>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  states={data}
                  isLoadingStates={status === "loading" || status === "idle"}
                  selectedState={selectedState}
                  onSelectState={handleStateSelection}
                  statesDailyData={statesDailyData}
                  data={data}
                  updateChartData={updateChartData} // Pass the callback function
                />
              }
            />
            <Route
              path="/statistics"
              element={<StatisticsDisplay data={data} />}
            />
            <Route
              path="/state-selection"
              element={
                <StateSelectionDropdown
                  states={data}
                  onSelect={handleStateSelection}
                />
              }
            />
            <Route
              path="/comparison"
              element={
                <DataComparisonModule
                  selectedStates={selectedStatesForComparison}
                  onSelect={handleComparisonSelection}
                  data={data}
                />
              }
            />
            <Route
              path="/filtering-sorting"
              element={
                <DataFilteringSortingModule
                  onFilter={handleFilter}
                  onSort={handleSort}
                />
              }
            />
          </Routes>
        </React.Suspense>
      </section>
    </Router>
  );
};

export default Dashboard;
