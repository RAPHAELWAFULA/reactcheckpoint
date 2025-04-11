import React from 'react';
import {Card} from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageURL} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props in case some data is missing
Player.defaultProps = {
  name: "Unknown Player",
  team: "No Team",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  imageURL: "https://via.placeholder.com/150"
};

export default Player;