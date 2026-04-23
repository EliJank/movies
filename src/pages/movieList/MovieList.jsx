import Container from "react-bootstrap/Container";
import Header from "./Header/Header";
import SearchBar from "./searchBar/SearchBar";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MovieDetails from "../movieDetails/MovieDetails";
import { API_URL, API_KEY } from "../../utils/constants";

const MovieList = () => {
  const [searchValue, setSearchValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [selectedId, setSelectedid] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const [isDetailsLoading, setIsDetailsLoading] = useSate(false)

  const onChangeMethod = (event) => {
    setSearchValue(event.target.value)
  }

  const onKeyUpMethod = (event) => {
    if (event.code === "Enter") {
      setIsLoading(true)
      const type = category == "all" ? "" : `&type=${category}`
      const url = `${API_URL}/?${API_KEY}&s=${searchValue}&t=${type}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.Search))
        .finally(() => setIsLoading(false))
  }

  const handleShowDetails = (movieId) => {
    setSelectedid(movieId)
    setShowDetails(true)

  }

  const handleCloseDetails = () => {
    setSelectedid(null)
    setShowDetails(false)
  }

  return (
    <Container>
      <Header text="Movie search:" />
      <SearchBar
        onKeyUpMethod={onKeyUpMethod}
        onChangeMethod={onChangeMethod}
      />
      {isLoading && (
        <Row className="justify-content-md-center">
          <Spinner animation="grow" />
          <p>Movie list is loading</p>
        </Row>
      )}
      { showDetails && ( <MovieDetails id={selectedId} handleClose={handleCloseDetails} isLoading={setIsDetailsLoading}/>)}

      {movies && !isLoading && (
        <Row>
          {movies.map((movie) => (
            <Col md={4} key={movie.imdbID}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title> {movie.Title}</Card.Title>
                  <Card.Text>type: {movie.Type} / year: {movie.Year}</Card.Text>
                  {isDelailsLoading && selectedId === movie.imbID && (
                    <>
                    <Spinner/>
                    <p>Movie data is Loading...</p>
                    </>
                  )}
                </Card.Body>
                <Card.Footer>
                  <Button disabled={isDetailsLoading} variant="primary" onClick={() => handleShowDetails(movie.imdbID)}>Open movie details</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
}
export default MovieList;
