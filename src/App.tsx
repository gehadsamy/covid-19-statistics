// App.tsx
import React from "react";
import Dashboard from "./pages/dashboard/DashBoard";
import { Provider } from "react-redux";
import store from "./services/store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
