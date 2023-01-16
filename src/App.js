import Home from "./pages/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Customers from "./pages/Customers/Customers";
import Defaults from "./pages/Defaults/Defaults";
import Fulfilment from "./pages/Fulfilment/Fulfilment";
import CustomerProfile from "./components/customer-profile/CustomerProfile";
import CustomerReconcillation from "./components/customer-reconcillation/CustomerReconcillation";
import Reconcillation from "./components/reconcillation/Reconcillation";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Overview />} index />
          <Route path="/customers" element={<Customers />} />
          <Route path="/defaults" element={<Defaults />} />
          <Route path="/fulfilment" element={<Fulfilment />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/reconcillation" element={<Reconcillation />} />

          <Route
            path="/customer-reconcillation"
            element={<CustomerReconcillation />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
