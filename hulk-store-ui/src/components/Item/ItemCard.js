import React from 'react';
import mockData from '../../mockData';

function ItemCard (props) {

    const items = mockData.map((item) => {
        return (
            <li key={item.id} className='column is-4-tablet is-3-desktop'>
                <div className='column is-12'>
                    <div class="card is-1by1">
                        <div class="card-image">
                            <figure class="image">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Product rep"></img>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{item.name}</p>
                                    <p class="subtitle is-6">@{item.type}</p>
                                    <p class="subtitle is-6">Available: {toString(item.available)}</p>
                                    <p class="subtitle is-6">Price: {toString(item.unitPrice)}</p>
                                    <p class="subtitle is-6">Total: {item.size}</p>
                                </div>
                            </div>

                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris.
                                <a>@bulmaio</a>.
                                <a href="#">#css</a>
                                <a href="#">#responsive</a>
                                <br></br>
                                <time datetime="2016-1-1">created: {item.created_at}</time>
                            </div>
                        </div>

                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Save</a>
                            <a href="#" class="card-footer-item">Edit</a>
                            <a href="#" class="card-footer-item">Delete</a>
                        </footer>

                    </div>
                </div>
                
            </li>
        )
    })

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    )
}

export default ItemCard;