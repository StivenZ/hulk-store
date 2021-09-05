import React from 'react';
import ItemCard from '../Item/ItemCard';
import {mockData} from '../../mockData';

function ItemsBox (props) {

    const items = mockData.map((item) => item)

    return (
        <React.Fragment>
            <div className='box'>
                <div className='columns mt-5 is-8 is-variable is-flex-wrap-wrap'>
                    <ItemCard mockData={items}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemsBox;