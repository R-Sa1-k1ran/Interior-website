import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Location.css'; // Optional custom styles

const Location = () => {
  // Sample data for office locations
  const locations = [
    {
      id: 1,
      city: 'visakhapatnam',
      address: 'kommadhi, Madhurwada',
      phone: '+91 1234567890',
      email: 'ab@interiors.com',
      hours: 'Mon - Fri: 9 AM - 6 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792579042!2d-73.9877316845936!3d40.748440979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus',
    },
    {
      id: 2,
      city: 'Vizianagaram',
      address: 'bhoddham, chipurupalli',
      phone: '+91 9087654321',
      email: 'cd@interiors.com',
      hours: 'Mon - Fri: 9 AM - 6 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.454676315603!2d-118.326865684785!3d34.097555780597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf20e4c82873%3A0x14015754d926dadb!2sHollywood%20Sign!5e0!3m2!1sen!2sus!4v1633025000000!5m2!1sen!2sus',
    },
    {
      id: 3,
      city: 'Srikakulam',
      address: 'etchrla, Ranasthalam',
      phone: '+91 9182736450',
      email: 'ch@interiors.com',
      hours: 'Mon - Fri: 9 AM - 6 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123456789012!2d-87.624421!3d41.878113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sMillennium%20Park!5e0!3m2!1sen!2sus!4v1633025200000!5m2!1sen!2sus',
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Locations</h1>
      <Row>
        {locations.map((location) => (
          <Col key={location.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <div className="map-container">
                <iframe
                  title={`${location.city} Map`}
                  src={location.mapUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{location.city}</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> {location.address}
                  <br />
                  <strong>Phone:</strong> {location.phone}
                  <br />
                  <strong>Email:</strong> {location.email}
                  <br />
                  <strong>Hours:</strong> {location.hours}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Location;