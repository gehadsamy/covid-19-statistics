import React from "react";
import Dashboard from "./pages/dashboard/DashBoard";
import { Provider } from "react-redux";
import store from "./services/store/store";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
