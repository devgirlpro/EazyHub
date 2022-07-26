import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
// import Sidebar from "./pages/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Employeespage from "./pages/EmployeesPage";
import VehiclesPage from "./pages/VehiclesPage";
import MapsPage from "./pages/MapsPage";
import TimeManagementpage from "./pages/TimeManagmentPage";
import StartShiftPage from "./pages/StartShiftPage";
import SignupPage from "./pages/SignupPage";
//try to change some thing
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/employees" element={<Employeespage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/time" element={<TimeManagementpage />} />
        <Route path="/startshift" element={<StartShiftPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>



  );
}

export default App;
