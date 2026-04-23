import Form from "react-bootstrap/Form";

const SearchBar = ({ onKeyUpMethod, onChangeMethod, setCategory }) => {
  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Movie title....."
        id="searchBox"
        onChange={onChangeMethod}
        onKeyUp={onKeyUpMethod}
      />
      <Form.Select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="movies">Movies</option>
        <option value="series">TV series</option>
      </Form.Select>
    </Form>
  );
};
export default SearchBar;
