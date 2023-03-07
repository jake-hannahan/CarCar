import React, { useEffect, useState,  } from 'react';
import Moment from 'react-moment';


function AppointmentList() {

    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleCancel = async (e) => {
        const appointmentHref = e.target.value;
        const appointmentUrl = `http://localhost:8080${appointmentHref}`;
        const fetchConfig = {
            method: "DELETE",
        }
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            fetchData();
        }
    }

    const handleFinished = async (e) => {
        const appointmentHref = e.target.value;
        const appointmentUrl = `http://localhost:8080${appointmentHref}`;
        const completed = {"completed": true};
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(completed),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            fetchData();
        }
    }

    return (
    <>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        if (appointment.completed === false) {
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
                                    <td>
                                        <button className='btn btn-danger' onClick={handleCancel} value={appointment.href}>Cancel</button>
                                        <button className='btn btn-success' onClick={handleFinished} value={appointment.href}>Finished</button>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
    </>
    )

};



export default AppointmentList;
