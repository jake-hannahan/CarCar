import React, { useEffect, useState  } from 'react';
import Moment from 'react-moment';


function AppointmentList() {


    const [appointments, setAppointments] = useState([]);


    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
        const appointmentId = e.target.value;
        const appointmentUrl = `http://localhost:8080/api/appointments/${appointmentId}/`;
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
                        <th>VIP Treatment</th>
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
                                <tr key={appointment.id} value={appointment.id}>
                                    <td>
                                    {appointment.vip
                                        ?   <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                </svg>
                                            </p>
                                        :   <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </p>
                                    }
                                    </td>
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
                                        <button className='btn btn-danger' onClick={handleCancel} value={appointment.id}>Cancel</button>
                                        <button className='btn btn-success' onClick={handleFinished} value={appointment.id}>Finished</button>
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
