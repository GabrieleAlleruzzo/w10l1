import { Card, Col, Row, CardText } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import CommentArea from "./CommentArea";

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
              {/* Pass the asin prop here */}
              <CommentArea asin={book.asin} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
