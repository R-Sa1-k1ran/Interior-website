import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Optional custom styles

const About = () => {
  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Founder & CEO',
      image: './Images/man1.jpg',
      description: 'John has over 15 years of experience in interior design and architecture.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: './Images/man2.jpg',
      description: 'Jane specializes in modern and minimalist interior designs.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Project Manager',
      image: './Images/man3.jpg',
      description: 'Mike ensures every project is completed on time and within budget.',
    },
  ];

  return (
    <Container className="my-5">
      {/* Company Introduction Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">About Us</h1>
          <p className="lead text-center">
            At Interiors Website, we believe that great design transforms spaces and lives. Our mission is to create
            beautiful, functional, and inspiring interiors that reflect your unique style and personality.
          </p>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {teamMembers.map((member) => (
              <Col key={member.id}>
                <Card className="h-100 shadow-sm text-center">
                  <Card.Img variant="top" src={member.image} alt={member.name} className="rounded-circle mx-auto mt-4" style={{ width: '150px', height: '150px' }} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="mb-4">Let's Create Something Beautiful Together</h2>
          <p className="lead mb-4">
            Ready to transform your space? Contact us today to schedule a consultation.
          </p>
          <Button as="a" href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;