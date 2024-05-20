import React, { useState } from "react";
import { useRecipeContext } from "../../context/RecipesContext";
import Preview from "../UI/Preview";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../../util/http";
import Spinner from "../UI/Spinner";
import Error from "../UI/Error";
import Pagination from "./Pagination";
import Copyright from "../UI/Copyright";

function Results() {
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useRecipeContext();

  const itemsPerPage = 10;

  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const {
    data: previews,
    isFetching,
    isError,
  } = useQuery({
    queryKey: [search],
    queryFn: ({ signal, queryKey }) =>
      fetchRecipes({ searchTerm: queryKey[0], signal }),
    enabled: search !== undefined,
  });

  let content;

  if (isFetching) {
    content = <Spinner />;
  }

  if (isError) {
    content = (
      <Error message={"No recipes found for your query! Please try again ;)"} />
    );
  }

  if (previews) {
    const currentPreviews = previews.slice(
      indexOfFirstRecipe,
      indexOfLastRecipe
    );

    content = (
      <>
        <ul className="results">
          {currentPreviews.map((preview) => (
            <Preview key={preview.id} preview={preview} />
          ))}
        </ul>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={Math.ceil(previews.length / itemsPerPage)}
        />
      </>
    );
  }

  return (
    <div className="search-results">
      {content}
      {/* <Copyright /> */}
    </div>
  );
}

export default Results;
