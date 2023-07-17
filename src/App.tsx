import Home from "./components/home/home";
import Header from "./components/common/header/header";
import Dashboard from "./components/dashboard/dashboard";
import Details from "./components/Details/details";
import { Routes, Route } from "react-router-dom";
import { RouteLinks } from "./constants";
import VehicleSimulation from "./components/simulation/simulation";
import VehicleHabitation from "./components/habitation/habitation";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={RouteLinks.home} element={<Home />} />
        <Route path={RouteLinks.dashboard} element={<Dashboard />} />
        <Route path={RouteLinks.habitation} element={<VehicleHabitation />} />
        <Route path={RouteLinks.simulation} element={<VehicleSimulation />} />
        <Route path={RouteLinks.carform} element={<Details />} />
        <Route path={RouteLinks.cardetails} element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
