import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  const imgagePath = props.image;

    return (
        <card>
            <div class="card mb-4 mt-5" style={{width: 18 + 'rem'}}>
            <img class="card-img-top" src={require(`../data/${imgagePath}`)}  alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <h5 class="card-title">{props.author}</h5>
                <p class="card-text">{props.published}</p>
                 <Link to="/book-details" class="btn btn-primary">Details</Link>
              </div>
            </div>
        </card>
    )
}

export default Cards;
