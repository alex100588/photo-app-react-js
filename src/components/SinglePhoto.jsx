import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const SinglePhoto = () => {
  const params = useParams();
  // console.log(process.env);
  

  const [photo, setPhoto] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/photos/${params.photoId}`
        );
        // console.log(response.data.comments);
        
        setPhoto(response.data);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    fetchData();
  }, []);

  const putComment = async () => {
    try {
      const photoCopy = { ...photo };
      photoCopy.comments.push(comment);
      setPhoto(photoCopy);
      setComment("");
      await axios.put(`http://localhost:3002/photos/${params.photoId}`, photo);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  };

  const onCommentTextChange = (e) => {
    setComment(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    putComment();
  };

  const buildUI = () => {
    if (hasError) {
      return <h2>No image to show</h2>;
    }

    if (photo === null) {
      return <Spinner animation="grow" variant="primary" />;
    }

    return (
      <>
        <Col xs={12} md={8}>
          <Card className="m-3 p-2">
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/${photo.srcImage}`}
            />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Text>S{photo.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-3">
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Comments
            </ListGroup.Item>
            {photo.comments.length > 0 ? (
              photo.comments.map((comment, idx) => (
                <ListGroup.Item as="li" key={idx}>
                  {comment}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item as="li">
                This photo has no comments
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={12}>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="m-3">
              <Form.Label>Add a comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={onCommentTextChange}
              />
            </Form.Group>
            <Button className="m-3" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </>
    );
  };

  return (
    <Container>
      <Row>{buildUI()}</Row>
    </Container>
  );
};

export default SinglePhoto;
