import "./YourRating.css";
import { BsStar } from "react-icons/bs";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Rating } from "react-simple-star-rating";
import axios from "axios";

const YourRating = (props) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const { id, name } = props;

  // Catch Rating value
  const handleRating = () => {
    console.log("Rating is ", rating);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onPointerMove = (value, index) => setRating(value);

  const rate = async () => {
    try {
      const res = await axios.post(
        "http://localhost:2323/api/v1/rating",
        {
          movieId: id,
          star: rating,
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res) {
        console.log(res);
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="giveRating" onClick={handleShow}>
        <BsStar fontSize="18px" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate The Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{name}</h3>
          {/* <StarRating /> */}
          <Rating
            onClick={handleRating}
            onPointerMove={onPointerMove}
            iconsCount={10}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={rate}>
            Rate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default YourRating;
