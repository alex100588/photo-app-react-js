import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from 'axios';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/photos");
        
        setPhotos(response.data);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };

    fetchData()
  }, []);

  const buildUI = () => {
    if (hasError) {
      return  <h2>No photos from database</h2>;
    }

    if (photos.length === 0) {
      return <Spinner animation="grow" variant="primary" />
    }
    
    return photos.map((photo) => (
      <>
        <Col xs={6} md={4} key={photo.id}> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${photo.srcThumbnail}`} />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Text>
                {photo.shortDesc}
              </Card.Text>
              <Button variant="primary">
                <NavLink to={`/photo/${photo.id}`} className="nav-link">
                  See more
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <br/>
      </>
    ));
  }

  return (
    <>
      <h1>Fotografii</h1>
      <br/>
      <Container>
        <Row>
          {buildUI()}
        </Row>
      </Container>
    </>
  );
}

export default Photos;