import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import TechnicianForm from './Components/Technician/TechnicianForm';
import AppointmentForm from './Components/Appointments/AppointmentForm';
import Nav from './Nav';
import SalesPersonForm from './sales_components/SalesPersonForm'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales-person">
            <Route path="new" element={<SalesPersonForm />} />
          </Route>
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="appointments/new" element={<AppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
