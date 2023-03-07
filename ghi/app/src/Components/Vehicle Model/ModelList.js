import React, { useEffect, useState,  } from 'react';

function ModelList() {

    const [models, setModels] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/models/");

        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h2 className='display-2 text-center'>Vehicle Models</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                        return (
                            <tr key={model.id} value={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td>
                                    <img className='img-thumbnail' style={{width: 100}} src={model.picture_url} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
        )

}


export default ModelList;
