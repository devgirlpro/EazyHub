import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Link } from "react-router";

import {
  HomePage,
  AboutPage,
  ContactPage,
  LoginPage,
  ManagerPage,
  TimeManagementPage,
  DashboardPage,
  EmployeesPage,
  VehiclesPage,
  MapsPage,
  TimeManagmentPage,
  StartShiftPage,
  EmployeeDetailsPage,
} from "./pages/index";

import { Navbar, Navbar2, Sidebar, Footer, Welcome } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar2 />
        <Welcome />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Routes>
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
      <Routes>
        <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
      </Routes>
      <Routes>
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
      <Routes>
        <Route path="/maps" element={<MapsPage />} />
      </Routes>
      <Routes>
        <Route path="/time" element={<TimeManagmentPage />} />
      </Routes>
      <Routes>
        <Route path="/startshift" element={<StartShiftPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Welcome from "./components/Welcome";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import Sidebar from "./pages/Sidebar";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import LoginPage from "./pages/LoginPage";
// import ManagerPage from "./pages/ManagerPage";
// import DashboardPage from "./pages/DashboardPage";
// import EmployeesPage from "./pages/EmployeesPage";
// import VehiclesPage from "./pages/VehiclesPage";
// import MapsPage from "./pages/MapsPage";
// import TimeManagementpage from "./pages/TimeManagmentPage";
// import StartShiftPage from "./pages/StartShiftPage";
// import EmployeeDetails from "./pages/EmployeeDetails";
