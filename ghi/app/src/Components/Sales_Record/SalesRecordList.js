import React, { useState, useEffect } from 'react';

function SalesRecordList() {
    const [salesRecords, setSalesRecords] = useState([]);

    const getSalesRecords = async () => {
        const url = 'http://localhost:8090/api/sales-records/';
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            setSalesRecords(data.sales)
        }
    }

    const formatPrice = (value) => {
        const newValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return (
            <td>${newValue}</td>
        )
    }

    useEffect(() => {
        getSalesRecords()
    }, []);


    return (
        <div className="content">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales Person</th>
                        <th>Employee Number</th>
                        <th>Purchaser</th>
                        <th>VIN</th>
                        <th>Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    {salesRecords.map(saleRecord => {
                        return (
                            <tr key={saleRecord.id}>
                                <td>{saleRecord.sales_person.name}</td>
                                <td>{saleRecord.sales_person.employee_number}</td>
                                <td>{saleRecord.customer.name}</td>
                                <td>{saleRecord.automobile.vin}</td>
                                {formatPrice(saleRecord.price)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SalesRecordList
