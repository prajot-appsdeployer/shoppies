import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { GlobalContext } from "../../context/Context";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/CartSlice";
import {
  wishlistAddItem,
  wishlistRemoveItem,
} from "../../features/WishlistSlice";

function Cards({ id, image, title, price, rating, category, product }) {
  const { userState } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

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

        {userState ? (
          <>
            {/* only add items if  user is logged in */}
            <ListGroup className="list-group m-2 mb-3">
              {isWishlistClicked ? (
                <Button
                  variant="outline-danger "
                  className="mb-2"
                  onClick={() => {
                    dispatch(wishlistRemoveItem(product));
                    setIsWishlistClicked(!isWishlistClicked);
                  }}
                >
                  Remove from wishlist
                </Button>
              ) : (
                <Button
                  variant="outline-primary mb-2"
                  onClick={() => {
                    dispatch(wishlistAddItem(product));
                    setIsWishlistClicked(!isWishlistClicked);
                  }}
                >
                  Add to wishlist
                </Button>
              )}

              {isClicked ? (
                <Button
                  variant="danger "
                  onClick={() => {
                    dispatch(removeItem(product));
                    setIsClicked(!isClicked);
                  }}
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  variant="primary "
                  onClick={() => {
                    dispatch(addItem(product));
                    setIsClicked(!isClicked);
                  }}
                >
                  Add to cart
                </Button>
              )}
            </ListGroup>
          </>
        ) : (
          <>
            {/* don't add items if user not logged in */}
            <ListGroup className="list-group m-2 mb-3">
              <Button
                variant="outline-primary mb-2"
                onClick={() => {
                  alert("Login to add items to wishlist.");
                }}
              >
                Add to wishlist
              </Button>

              <Button
                variant="primary "
                onClick={() => {
                  alert("Login to add items to cart.");
                }}
              >
                Add to cart
              </Button>
            </ListGroup>
          </>
        )}

        <Card.Footer className="text-muted">Category: {category}</Card.Footer>
      </Card>
    </>
  );
}

export default Cards;
