import React, { useEffect, useState,  } from 'react';

function ModelForm() {


    const [formData, setFormData] = useState({
        name: "",
        manufacturer: "",
        picture: ""
    })


    const [manufacturers, setManufacturers] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: formData.name,
            manufacturer_id: formData.manufacturer,
            picture_url: formData.picture
        }

        const url = "http://localhost:8100/api/models/";

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
                name: "",
                manufacturer: "",
                picture: ""
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
        const response = await fetch("http://localhost:8100/api/manufacturers/");

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
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
                    <h2 className="display-5 text-center"><b>Create a vehicle model</b></h2>
                    <form onSubmit={handleSubmit} id="create-vehicle-model">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="Name" required type="text" name="name" id="name" value={formData.name} className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} placeholder="picture" required type="url" name="picture" id="picture" value={formData.picture} className="form-control"/>
                            <label htmlFor="picture">Picture URL</label>
                        </div>
                        <div className="form-floating mb-3">
                        <select onChange={handleFieldChange} value={formData.manufacturer} required name="manufacturer" id="manufacturer" className="form-select">
                        <option value="">Choose a manufacturer</option>
                            {manufacturers.map(manufacturer => {
                                return (
                                    <option value={manufacturer.id} key={manufacturer.id}>{manufacturer.name}</option>
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


export default ModelForm;
