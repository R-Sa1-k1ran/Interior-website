import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'; // Optional custom styles

const Menu = () => {
  // Sample data for interior design categories
  const categories = [
    {
      id: 1,
      title: 'Living Room',
      image: './Images/imgm1.jpg',
      description: 'Transform your living room into a cozy and stylish space.',
    },
    {
      id: 2,
      title: 'Bedroom',
      image: './Images/imgm2.jpg',
      description: 'Create a serene and relaxing bedroom retreat.',
    },
    {
      id: 3,
      title: 'Kitchen',
      image: './Images/imgm3.jpg',
      description: 'Design a modern and functional kitchen.',
    },
    {
      id: 4,
      title: 'Bathroom',
      image: './Images/imgm4.jpg',
      description: 'Upgrade your bathroom with elegant designs.',
    },
    {
      id: 5,
      title: 'Home Office',
      image: './Images/imgm5.jpg',
      description: 'Set up a productive and inspiring home office.',
    },
    {
      id: 6,
      title: 'Outdoor Spaces',
      image: './Images/imgm6.jpg',
      description: 'Enhance your outdoor living areas with beautiful designs.',
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Interior Design Services</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {categories.map((category) => (
          <Col key={category.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={category.image} alt={category.title} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <button className="btn btn-primary">Explore More</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;