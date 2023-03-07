import React, { useEffect, useState,  } from 'react';

function ManufacturerList() {


    const [manufacturers, setManufacturers] = useState([]);


    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/manufacturers/");

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);


    return (
    <>
        <h2 className='display-2 text-center'>Manufacturers</h2>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.id} value={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
    )
}


export default ManufacturerList;
