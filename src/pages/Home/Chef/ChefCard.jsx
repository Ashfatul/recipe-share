import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({chefData}) => {

    return (
    <div className="col-md-4 p-4">
    <Card>
      {/* <Card.Img variant="top" src={chefData?.image} /> */}
      <div className="chef-image" style={{ backgroundImage: `url(${chefData?.image})` }}></div>
      <Card.Body className='bg-dark text-light'>
        <Card.Title className='text-uppercase text-warning'>{chefData?.name}</Card.Title>
        <p><span>{chefData?.experience} Years of Experience</span></p>
        <p><span>{chefData?.recipes} Recipes</span></p>
        <p><span>{chefData?.likes} Likes</span></p>
        <Link to={`/chef/${chefData?.id}`} className='btn w-100 btn-primary p-3'>View Recipes</Link>
      </Card.Body>
    </Card>
    </div>
    );
};

export default ChefCard;