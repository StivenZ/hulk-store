import React from 'react';
import {mockData} from '../../mockData';
import redCircle from '../../images/red-circle.png';
import greenCircle from '../../images/green-circle.png';
import orangeCircle from '../../images/orange-circle.png';

function ItemCard (props) {

    const items = mockData.map((item) => {

        let circleIcon;

        const isAvailable = () =>{
            if (item.size === 0) {
                circleIcon = redCircle;
            } else if (item.size <= 5 && item.size > 0) {
                circleIcon = orangeCircle;
            } else circleIcon = greenCircle;

            return circleIcon;
        }

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
                                <div class="block">
                                    <span className='icon-text is-flex is-justify-content-space-between'>
                                        <span class="title is-4">{item.name}</span>
                                        <span className='block level-left'>
                                            <figure class="image is-24x24">
                                                <img src={isAvailable()}></img>
                                            </figure>
                                        </span>

                                    </span>
                                    <p class="subtitle is-6">@{item.type}</p>
                                    <p class="subtitle is-6">${item.unitPrice}</p>
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