import React from 'react';
import { Button, Container, Row, Col, Card, Carousel } from 'react-bootstrap';


const Home = () => {
  return (
    <>
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='./Images/img1.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Timeless elegance meets modern design</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='./Images/img2.jpg'
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Effortless style meets everyday comfort</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Product Categories */}
      <Container className="my-5">
        <h2 id="categories" className="text-center mb-4">Categories</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src='./Images/img3.jpg' />
              <Card.Body>
                <Card.Title>Bedroom</Card.Title>
                <Card.Text>
                A bedroom is a serene sanctuary with a cozy bed, soft lighting, functional storage, and calming colors for comfort and style.
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src='./Images/img4.jpg' />
              <Card.Body>
                <Card.Title>Dinig</Card.Title>
                <Card.Text>
                A dining space fosters connection, featuring a stylish table, comfortable seating, ambient lightingfor shared meals and gatherings.
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="./Images/img6.jpg" />
              <Card.Body>
                <Card.Title>Kitchen</Card.Title>
                <Card.Text>
                A kitchen blends functionality and style with efficient layouts, modern appliances for cooking and socializing.
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>&copy; 2023 Wood Website. All rights reserved.</p>
          <p>Contact us: info@woodwebsite.com</p>
        </Container>
      </footer>
    </>
  );
};

export default Home;