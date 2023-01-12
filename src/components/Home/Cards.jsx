import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cards({
  id,
  image,
  title,
  price,
  rating,
  category,
  dispatch,
  product,
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Card className="col-md-3 p-0" style={{ width: "18rem" }}>
        <Card.Img className="m-3 card-img" variant="top" src={image} />

        <Card.Body>
          <Card.Title className="mb-3">${price}</Card.Title>
          <Card.Subtitle className="mb-2"> {title} </Card.Subtitle>
          <Card.Text>
            Rating: ⭐ {rating.rate}/5 ({rating.count})
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group m-2 mb-3">
          <Button variant="outline-primary mb-2 ">Add to wishlist</Button>
          {isClicked ? (
            <Button
              variant="danger "
              onClick={() => {
                dispatch({
                  type: "REMOVE",
                  payload: product,
                });
                setIsClicked(!isClicked);
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="primary "
              onClick={() => {
                dispatch({
                  type: "ADD",
                  payload: product,
                });
                setIsClicked(!isClicked);
              }}
            >
              Add to cart
            </Button>
          )}
        </ListGroup>

        <Card.Footer className="text-muted">Category: {category}</Card.Footer>
      </Card>
    </>
  );
}

export default Cards;
