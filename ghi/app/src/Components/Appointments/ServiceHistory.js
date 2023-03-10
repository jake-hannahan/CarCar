import React, { useState  } from 'react';
import Moment from 'react-moment';

function ServiceHistory() {


    const [searchVIN, setSearchVIN] = useState("");
    const [appointments, setAppointments] = useState([]);


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchVIN(value);
    }


    const handleSearchVIN = async () => {
        const vin = searchVIN;
        const url = `http://localhost:8080/api/appointments/${vin}/`
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }

    }


    return (
    <>
        <div className="input-group mb-3">
            <input onChange={handleSearchChange} value={searchVIN} type="text" className="form-control" placeholder="VIN" aria-label="VIN" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button onClick={handleSearchVIN} className="btn btn-outline-secondary" type="button">Search VIN</button>
            </div>
        </div>
        <h2 className='display-2 text-center'>Service Appointments</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.href} value={appointment.href}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.customer_name}</td>
                                <td>
                                    <Moment format="YYYY-MM-DD">
                                        {appointment.date}
                                    </Moment>
                                </td>
                                <td>
                                    <Moment format="LT">
                                        {appointment.date}
                                    </Moment>
                                </td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </>
    )
}


export default ServiceHistory;
