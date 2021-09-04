import React from 'react';
import mockData from '../../mockData';

function ControlPanel () {

    const items = mockData.map((item) => {
        return (
            <tr>
                <th>{item.name}</th>
                <th>{item.id}</th>
                <th>{item.size}</th>
                <th>{item.unitPrice}</th>
                <th>{item.size * item.unitPrice}</th>
                <th>{item.created_at}</th>
                <th> <button className='button is-primary'> edit </button> </th>
            </tr>
        )
    })

    return (
        <React.Fragment>
            <div className='box ml-5 mr-5'>
                <table className='table is-stripped is-hoverable is-bordered is-fullwidth'>
                    <thead>
                        <tr>
                            <th> NAME </th>
                            <th> ID </th>
                            <th> TOTAL </th>
                            <th> UNIT_PRICE </th>
                            <th> TOTAL_PRICE </th>
                            <th> CREATION_DATE </th>
                            <th> EDIT </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default ControlPanel;