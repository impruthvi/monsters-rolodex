import "./search-box.styles.css";

interface ISearchBoxProps {
  className: string;
  placeholder: string;
  onChangeHandler: (a: string) => void;
}

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: ISearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={(e) => onChangeHandler}
    />
  );
};

export default SearchBox;
