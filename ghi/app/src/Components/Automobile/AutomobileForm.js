import React, { useEffect, useState,  } from 'react';


function AutomobileForm() {


    const [formData, setFormData] = useState({
        color: "",
        year: "",
        vin: "",
        model: "",
    })


    const [models, setModels] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            color: formData.color,
            year: formData.year,
            vin: formData.vin,
            model_id: formData.model
        }

        const url = "http://localhost:8100/api/automobiles/";

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
                color: "",
                year: "",
                vin: "",
                model: ""
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
        const response = await fetch("http://localhost:8100/api/models/");

        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
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
                    <h2 className="display-5 text-center"><b>Add an automobile to inventory</b></h2>
                    <form onSubmit={handleSubmit} id="create-automobile">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Color" required type="text" name="color" id="color" value={formData.color} className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="year" required type="text" name="year" id="year" value={formData.year} className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="vin" required type="text" name="vin" id="vin" value={formData.vin} className="form-control"/>
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handleFieldChange} value={formData.model} required name="model" id="model" className="form-select">
                        <option value="">Choose a model</option>
                            {models.map(model => {
                                return (
                                    <option value={model.id} key={model.id}>{model.name}</option>
                                )
                            })}
                        </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AutomobileForm;
