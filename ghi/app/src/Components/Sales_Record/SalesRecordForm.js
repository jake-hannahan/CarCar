import React, { useState, useEffect } from 'react';

function SalesRecordForm() {
    const [automobiles, setAutomobiles] = useState([]);
    const [salesPersons, setSalesPersons] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [saleVINs, setSaleVINS] = useState([]);
    const [formData, setFormData] = useState({
        automobile: '',
        sales_person: '',
        customer: '',
        price: '',
    });


    const getSaleRecords = async () => {
        const url = 'http://localhost:8090/api/sales-records/';
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setSaleVINS(data.sales.map(sale => sale.automobile.vin))
        }
    }


    const getAutomobiles = async () => {
        const url = 'http://localhost:8090/api/autos/';
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            const autos = data.autos
            setAutomobiles(autos)
        }
    }


    const getSalesPersons = async () => {
        const url = 'http://localhost:8090/api/sales-person/';
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setSalesPersons(data.sales_person)
        }
    }


    const getCustomers = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const salesRecordUrl = 'http://localhost:8090/api/sales-records/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesRecordUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                automobile: '',
                sales_person: '',
                customer: '',
                price: '',
            });
        }

    }


    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }


    useEffect(() => {
        getSaleRecords();
        getAutomobiles();
        getSalesPersons();
        getCustomers();
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a New Sales Record</h1>
                    <form onSubmit={handleSubmit} id="create-sales-record-form">
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.automobile} required name="automobile" id="automobile" className="form-select">
                                <option value="">Choose an automobile</option>
                                {automobiles.filter(automobile => saleVINs.includes(automobile.vin) === false).map(automobile => {
                                    return (
                                        <option key={automobile.vin} value={automobile.import_href}>{automobile.vin}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.sales_person} required name="sales_person" id="sales_person" className="form-select">
                                <option value="">Choose a sales person</option>
                                {salesPersons.map(salesPerson => {
                                    return (
                                        <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleFormChange} value={formData.customer} required name="customer" id="customer" className="form-select">
                                <option value="">Choose a customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>{customer.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.price} placeholder="Price" required type="number" name="price" id="price" className="form-control" />
                            <label htmlFor="price">Sale Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default SalesRecordForm
