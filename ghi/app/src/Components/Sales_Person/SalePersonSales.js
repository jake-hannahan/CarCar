import React, { useState, useEffect } from 'react';

function SalesPersonSales() {
    const [salesPersons, setSalesPersons] = useState([]);
    const [salesPerson, setSalesPerson] = useState([]);
    const [salesRecords, setSalesRecords] = useState([]);


    const getSalesPersons = async () => {
        const url = 'http://localhost:8090/api/sales-person/';
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setSalesPersons(data.sales_person)
        }
    }

    const getSalesRecords = async () => {
        const saleRecordsUrl = 'http://localhost:8090/api/sales-records/';
        const saleRecordResponse = await fetch(saleRecordsUrl);

        if (saleRecordResponse.ok) {
            const data = await saleRecordResponse.json();
            const sales = data.sales;
            setSalesRecords(sales)
        }
    }

    const handleSearchChange = async (e) => {
        e.preventDefault();

        const value = e.target.value;
        const url = `http://localhost:8090/api/sales-person/${value}/`
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            setSalesPerson(data)
        }
    }


    useEffect(() => {
        getSalesPersons();
        getSalesRecords();
    }, []);

    return (
        <div className="content">
            <div className="mb-3">
                <select onChange={handleSearchChange} value={salesPerson.name} required name="sales_person" id="sales_person" className="form-select">
                    <option value="">Choose a sales person</option>
                    {salesPersons.map(salesPerson => {
                        return (
                            <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.name}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Sale Price</th>
                        </tr>
                    </thead>
                <tbody>
                {salesRecords.filter(sale => sale.sales_person.id === salesPerson.id).map(salesRecord => {
                    return (
                        <tr key={salesRecord.id}>
                            <td>{salesRecord.sales_person.name}</td>
                            <td>{salesRecord.customer.name}</td>
                            <td>{salesRecord.automobile.vin}</td>
                            <td>{salesRecord.price}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesPersonSales
