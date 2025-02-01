import { Card } from "react-bootstrap";

const SinglePhoto = () => {
  return (
    <Card>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/media/img.jpg`} />
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinglePhoto;
