import { useState, useEffect } from "react"


function ManufacturerForm() {

    const [formData, setFormData] = useState({
        name: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: formData.name
        }

        const url = "http://localhost:8100/api/manufacturers/";

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            await response.json();

            setFormData({
                name: ""
            })
        }
    };

    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
    <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="display-5 text-center"><b>Create a manufacturer</b></h2>
                    <form onSubmit={handleSubmit} id="create-new-service-appointment">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Name" required type="text" name="name" id="name" value={formData.name} className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}


export default ManufacturerForm;
