import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import TechnicianForm from './Components/Technician/TechnicianForm';
import AppointmentForm from './Components/Appointments/AppointmentForm';
import AppointmentList from './Components/Appointments/AppointmentList';
import Nav from './Nav';
import SalesPersonForm from './Components/Sales_Person/SalesPersonForm';
import CustomerForm from './Components/Customer/CustomerForm';
import SalesRecordForm from './Components/Sales_Record/SalesRecordForm';
import SalesRecordList from './Components/Sales_Record/SalesRecordList';
import SalesPersonSales from './Components/Sales_Person/SalePersonSales';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales-person">
            <Route path="new" element={<SalesPersonForm />} />
            <Route path="sales" element={<SalesPersonSales />} />
          </Route>
          <Route path="customer">
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales-record">
            <Route path="new" element={<SalesRecordForm />} />
            <Route path="all" element={<SalesRecordList />} />
          </Route>
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="appointments/new" element={<AppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
