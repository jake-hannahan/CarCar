import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item'>
              <NavLink className='nav-link' to="manufacturers">List of Manufacturers</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="manufacturers/new">Add Manufacturers</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="models">List of Vehicle Models</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="models/new">Add Vehicle Model</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="automobiles">List of Automobiles</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="automobiles/new">Add Automobile</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="technician/new">New Technician</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="appointments">List of Service Appointments</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="appointments/new">New Service Appointment</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="appointments/history">Service History</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="sales-person/new">New Sales Person</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="customer/new">New Customer</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
