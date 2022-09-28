import "./search-box.style.css";

const SearchBox = ({ placeholder, className, onChangeHandler }) => (
  <div>
    <input
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
      type="search"
    />
  </div>
);

export default SearchBox;
