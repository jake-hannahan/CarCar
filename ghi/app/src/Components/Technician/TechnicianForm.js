import { useState } from "react"


function TechnicianForm() {


    const [formData, setFormData] = useState({
        name: "",
        employeeNumber: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: formData.name,
            employee_number: formData.employeeNumber
        }

        const url = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            await response.json();

            setFormData({
                name: "",
                employeeNumber: ""
            })
        }
    }


    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="display-5 text-center">New Technician</h2>
                    <form onSubmit={handleSubmit} id="create-new-technician">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Name" required type="text" name="name" id="name" value={formData.name} className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="employeeNumber" required type="text" name="employeeNumber" id="employeeNumber" value={formData.employeeNumber} className="form-control"/>
                            <label htmlFor="employeeNumber">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default TechnicianForm;
