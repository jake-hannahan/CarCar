import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import TechnicianForm from './Components/Technician/TechnicianForm';
import AppointmentForm from './Components/Appointments/AppointmentForm';
import AppointmentList from './Components/Appointments/AppointmentList';
import ServiceHistory from './Components/Appointments/ServiceHistory';
import Navigation from './Nav';
import SalesPersonForm from './Components/Sales_Person/SalesPersonForm';
import CustomerForm from './Components/Customer/CustomerForm';
import SalesRecordForm from './Components/Sales_Record/SalesRecordForm';
import SalesRecordList from './Components/Sales_Record/SalesRecordList';
import SalesPersonSales from './Components/Sales_Person/SalePersonSales';
import ManufacturerList from './Components/Manufacturer/ManufacturerList';
import ManufacturerForm from './Components/Manufacturer/ManufacturerForm';
import ModelList from './Components/Vehicle Model/ModelList';
import ModelForm from './Components/Vehicle Model/ModelForm';
import AutomobileList from './Components/Automobile/AutomobileList';
import AutomobileForm from './Components/Automobile/AutomobileForm';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
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
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
