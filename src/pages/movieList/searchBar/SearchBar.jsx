import Form from "react-bootstrap/Form";

const SearchBar = ({ onKeyUpMethod, onChangeMethod }) => {
  return (
    <Form>
    <Form.Control
      type="text"
      placeholder="Movie title....."
      id="searchBox"
      onChange={onChangeMethod}
      onKeyUp={onKeyUpMethod}
    />
    <Form.Select>
<option value="all">All</option>
<option value="movies">Movies</option>
<option value="series">TV series</option>
    </Form.Select>
    </Form>
  );
};
export default SearchBar;
