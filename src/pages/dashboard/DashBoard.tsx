// Dashboard.tsx
import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import {
  useAppDispatch,
  useAppSelector,
} from "../../services/customHooks/useAppDispatch";
import {
  fetchAllStatesData,
  fetchCovidData,
} from "../../services/store/slices/covidDataSlice";
import { Button, DashboardHeader } from "./DashBoaard.styled";
import { useLocation } from "react-use";
import Loader from "../../sharedComponets/uiComponents/Loader";

const Home = lazy(() => import("../home/Home"));
const DataComparisonModule = lazy(
  () => import("../../components/dataComparisonModule/DataComparisonModule")
);

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentData = useAppSelector((state) => state.covidData);
  const [selectedState, setSelectedState] = useState<string>("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefix = selectedState
      ? `states/${selectedState.toLowerCase()}`
      : "us";
    dispatch(fetchCovidData(`${prefix}/current.json`, `${prefix}/daily.json`));
  }, [dispatch, selectedState]);

  useEffect(() => {
    dispatch(fetchAllStatesData());
  }, [dispatch]);

  const toggleMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.body.classList.remove("daxrk");
    } else {
      document.body.classList.add("dark");
    }
  };

  const handleStateSelection = (stateCode: string) => {
    setSelectedState(stateCode);
  };

  if (currentData.status === "loading") {
    return <Loader />;
  }

  if (currentData.status === "failed") {
    return <div>Error: {currentData.error}</div>;
  }

  const statesDailyData: Record<string, any[]> = {};

  const resetDashboard = () => {
    setSelectedState("");
  };

  return (
    <Router>
      <section
        className={`grid w-screen min-h-screen overflow-hidden antialiased  bg-${
          darkMode ? "dark" : "light"
        }-${darkMode ? "900" : "100"}`}
        style={{
          gridTemplateRows: "auto 1fr auto",
          backgroundColor: darkMode ? "#1F2937" : "#F3F4F6",
          color: darkMode ? "#F3F4F6" : "#1F2937",
        }}
      >
        <DashboardHeader>
          <Link
            to="/"
            className="my-4 text-xl font-semibold sm:px-6 lg:px-8 w-fit"
          >
            COVID-19 Dashboard
          </Link>
          {selectedState && <Button onClick={resetDashboard}>Reset</Button>}
          <Link to="/comparison">
            <Button>Compare</Button>
          </Link>
          <button onClick={toggleMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </DashboardHeader>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentData={currentData.data}
                  historicalData={currentData.historicalData}
                  states={currentData.states}
                  isLoadingStates={
                    currentData.status === "loading" ||
                    currentData.status === "idle"
                  }
                  darkMode={darkMode}
                  selectedState={selectedState}
                  onSelectState={handleStateSelection}
                  statesDailyData={statesDailyData}
                  // updateChartData={updateChartData}
                />
              }
            />

            <Route
              path="/comparison"
              element={
                <DataComparisonModule
                  data={currentData.states}
                  darkMode={darkMode}
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
