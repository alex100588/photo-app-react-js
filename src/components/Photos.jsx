import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/photos");
        setPhotos(response.data);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    fetchData();
  }, []);

  const buildUI = () => {
    if (hasError) {
      return <h2>No image to show</h2>;
    }

    if (photos.length === 0) {
      return <Spinner animation="grow" variant="primary" />;
    }

    return photos.map(({ id, srcThumbnail, title, shortDesc }) => (
      <>
        <Col xs={12} md={6} lg={4} key={id}>
          <Card className="mb-2">
            <Card.Img
              variant="top"
              className="imageStyle"
              src={`${process.env.PUBLIC_URL}/${srcThumbnail}`}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{shortDesc}</Card.Text>
              <Button variant="primary">
                <NavLink to={`/photo/${id}`} className="nav-link">
                  See more
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <br />
      </>
    ));
  };

  return (
    <>
      <h1 className="ps-5 mobile-padding">Photos</h1>
      <br />
      <Container>
        <Row>{buildUI()}</Row>
      </Container>
    </>
  );
};

export default Photos;
