import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/UI/Spinner";
import Error from "../components/UI/Error";
import icons from "../assets/icons.svg";
import { useBookmarkContext } from "../context/BookmarkContext";

function Recipe() {
  const { id } = useParams();
  const { checkBookmark, setBookmarks } = useBookmarkContext();

  const {
    data: recipe,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: [id],
    queryFn: ({ signal, queryKey }) => fetchRecipe({ signal, id: queryKey[0] }),
  });

  const [servings, setServings] = useState(recipe?.servings ?? 4);
  const isBookmarked = checkBookmark(recipe);

  let content;

  if (isFetching) {
    content = <Spinner />;
  }

  if (isError) {
    content = (
      <Error message={error.info?.message || "No recipe found!"}></Error>
    );
  }

  function toggleBookmark() {
    if (isBookmarked) {
      const updatedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];
      const indexToRemove = updatedBookmarks.findIndex(
        (item) => item.id === recipe.id
      );
      if (indexToRemove !== -1) {
        updatedBookmarks.splice(indexToRemove, 1);
        setBookmarks(updatedBookmarks);
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      }
    } else {
      const newBookmark = { ...recipe };
      const updatedBookmarks = [
        ...(JSON.parse(localStorage.getItem("bookmarks")) || []),
        newBookmark,
      ];
      setBookmarks(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    }
  }

  function handleServingChange(servings) {
    if (servings > 0) {
      setServings(servings);
    }
  }

  if (recipe) {
    content = (
      <>
        <figure className="recipe__fig">
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="recipe__img"
          />
          <h1 className="recipe__title">
            <span>{recipe.title}</span>
          </h1>
        </figure>
        <div className="recipe__details">
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href={`${icons}#icon-clock`} />
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">
              {recipe.cooking_time}
            </span>
            <span className="recipe__info-text">minutes</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href={`${icons}#icon-users`} />
            </svg>
            <span className="recipe__info-data recipe__info-data--people">
              {servings}
            </span>
            <span className="recipe__info-text">servings</span>
            <div className="recipe__info-buttons">
              <button
                className="btn--tiny btn--increase-servings"
                onClick={() => handleServingChange(servings - 1)}
              >
                <svg>
                  <use href={`${icons}#icon-minus-circle`} />
                </svg>
              </button>
              <button
                className="btn--tiny btn--increase-servings"
                onClick={() => handleServingChange(servings + 1)}
              >
                <svg>
                  <use href={`${icons}#icon-plus-circle`} />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`recipe__user-generated ${recipe.key ? "" : "hidden"}`}
          >
            <svg>
              <use href={`${icons}#icon-user`} />
            </svg>
          </div>
          <button className="btn--round" onClick={toggleBookmark}>
            <svg>
              <use
                href={`${icons}#${
                  isBookmarked ? "icon-bookmark-fill" : "icon-bookmark"
                }`}
              />
            </svg>
          </button>
        </div>
        <div className="recipe__ingredients">
          <h2 className="heading--2">Recipe ingredients</h2>
          <ul className="recipe__ingredient-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li className="recipe__ingredient" key={index}>
                <svg className="recipe__icon">
                  <use href={`${icons}#icon-check`} />
                </svg>
                <div className="recipe__quantity">
                  {ingredient.quantity &&
                    (ingredient.quantity * servings) / recipe.servings}
                </div>
                <div className="recipe__description">
                  <span className="recipe__unit">{ingredient.unit}</span>{" "}
                  {ingredient.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe__directions">
          <h2 className="heading--2">How to cook it</h2>
          <p className="recipe__directions-text">
            This recipe was carefully designed and tested by{" "}
            <span className="recipe__publisher"> {recipe.publisher} </span>.
            Please check out directions at their website.
          </p>
          <a
            className="btn--small recipe__btn"
            href={recipe.source_url}
            target="_blank"
          >
            <span>Directions</span>
            <svg className="search__icon">
              <use href={`${icons}#icon-arrow-right`} />
            </svg>
          </a>
        </div>
      </>
    );
  }

  return <div className="recipe">{content}</div>;
}

export default Recipe;
