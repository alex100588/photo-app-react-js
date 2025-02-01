import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Photos = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/media/img.jpg`}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">
                <NavLink to={`/photo/1`} className="nav-link">
                  See more
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Photos;
