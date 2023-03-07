import { useState, useEffect } from "react"


function AppointmentForm() {


    const [formData, setFormData] = useState({
        vin: "",
        customerName: "",
        date: "",
        technician: "",
        reason: ""
    })


    const [technicians, setTechnicians] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            vin: formData.vin,
            customer_name: formData.customerName,
            date: formData.date,
            technician: formData.technician,
            reason: formData.reason
        }

        const url = 'http://localhost:8080/api/appointments/';

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            const newAppointment = await response.json();

            setFormData({
                vin: "",
                customer_name: "",
                date: "",
                technician: "",
                reason: ""
            })
        }
    };


    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/technicians/");

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        } else {
            console.error(response);
        }
    }


    useEffect(() => {
        fetchData()
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="display-5 text-center"><b>New Service Appointment</b></h2>
                    <form onSubmit={handleSubmit} id="create-new-service-appointment">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Vin" required type="text" name="vin" id="vin" value={formData.vin} className="form-control"/>
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="customerName" required type="text" name="customerName" id="customerName" value={formData.customerName} className="form-control"/>
                            <label htmlFor="customerName">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Date" required type="datetime-local" name="date" id="date" value={formData.date} className="form-control"/>
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handleFieldChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                        <option value="">Choose a Technician</option>
                            {technicians.map(technician => {
                                return (
                                    <option value={technician.id} key={technician.id}>{technician.name} | Employee #: {technician.employee_number}</option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Reason" required type="text" name="reason" id="reason" value={formData.reason} className="form-control"/>
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AppointmentForm;
