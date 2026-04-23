import { useState, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { API_URL, API_KEY } from "../../utils/constants";

const MovieDetails = ({ id, handleClose, isLoading }) => {
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const url = `${API_URL}/?${API_KEY}&i=${id}`;
    isLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        })
        .finally(() => isLoading(false));
    }, 1000);
  }, [id]);

  return (
    <>
      {movie && !isLoading && (
        <Modal show={movie} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{movie.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12} md={8}>
                <div className="ps-md-3">
                  <h5 className="mb-3">About the movie</h5>
                  <p stylr={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                    {movie.Plot}
                  </p>
                  <hr />
                  <p>
                    <strong>Year:</strong> {movie.Year}
                  </p>
                  <p>
                    <strong>Rating:</strong> {movie.imdbRating}
                  </p>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <h2>movie details</h2>
    </>
  );
};

export default MovieDetails;
