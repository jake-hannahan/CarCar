import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import TechnicianForm from './Components/Technician/TechnicianForm';
import AppointmentForm from './Components/Appointments/AppointmentForm';
import AppointmentList from './Components/Appointments/AppointmentList';
import ServiceHistory from './Components/Appointments/ServiceHistory';
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
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
