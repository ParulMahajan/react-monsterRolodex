
import "./search-box.styles.css"

const SearchBox = ({ onSearch }) => (
  <input
    className="search-box"
    type="search"
    placeholder="search monsters"
    onChange={onSearch}
  />
);

export default SearchBox;