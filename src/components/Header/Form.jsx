import { useRef } from "react";
import icons from "../../assets/icons.svg";
import { useRecipeContext } from "../../context/RecipesContext";

export default function Form() {
  const searchElement = useRef();
  const { search, setSearch } = useRecipeContext();

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchElement.current.value);
    searchElement.current.value = "";
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__field"
        placeholder={"Search over 1,000,000 recipes"}
        ref={searchElement}
      />
      <button className="btn search__btn" type="submit">
        <svg className="search__icon">
          <use href={`${icons}#icon-search`}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}
