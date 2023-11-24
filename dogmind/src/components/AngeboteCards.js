// AngeboteCard.js

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

import '../assets/css/AngeboteCards.css';

function AngeboteCard({ trainingData, categories }) {
  // Filter trainingData based on the categories
  const filteredData = trainingData.filter(item => categories.includes(item.category));

  return (
    <div className='card-background'>
      <h1>Weitere Trainings, die dich interessieren könnten:</h1>
      <Row>
        {filteredData.map((training) => (
          <Card key={training.id} className={training.id % 2 === 0 ? 'even-card' : 'odd-card'} style={{ width: '18rem' }}>
            <img src={training.image} alt={training.title} />
            <Card.Body>
              <Card.Title>{training.title}</Card.Title>
              <Card.Text>{training.cardText}</Card.Text>
              <Button variant="primary">Mehr erfahren</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

AngeboteCard.propTypes = {
  trainingData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cardText: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, // Use 'categories' instead of 'category'
};

export default AngeboteCard;
