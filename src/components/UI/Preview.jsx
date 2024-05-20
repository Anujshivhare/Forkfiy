import React from "react";
import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipesContext";

function Preview({ preview }) {
  const { selectedRecipeId, setSelectedRecipeId } = useRecipeContext();

  return (
    <li className="preview" key={preview.id}>
      <Link
        className={`preview__link ${
          preview.id === selectedRecipeId && "preview__link--active"
        }`}
        to={`/${preview.id}`}
        onClick={() => setSelectedRecipeId(preview.id)}
      >
        <figure className="preview__fig">
          <img src={preview.image_url} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{preview.title}</h4>
          <p className="preview__publisher">{preview.publisher}</p>
          <div
            className={`preview__user-generated ${preview.key ? "" : "hidden"}`}
          >
            <svg className="preview__user-icon">
              <use href={`${icons}#icon-user`} />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Preview;
