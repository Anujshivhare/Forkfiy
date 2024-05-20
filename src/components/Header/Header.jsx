import React from "react";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import Form from "./Form";
import Bookmarks from "./Bookmarks";
import AddRecipe from "./AddRecipe";
import icons from "../../assets/icons.svg";

function Header() {
  const [isAddRecipeVisible, setIsAddRecipeVisible] = useState(false);

  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <Form></Form>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button
              className="nav__btn nav__btn--add-recipe"
              onClick={() => setIsAddRecipeVisible(true)}
            >
              <svg className="nav__icon">
                <use href={`${icons}#icon-edit`}></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <Bookmarks></Bookmarks>
          </li>
        </ul>
      </nav>

      <AddRecipe
        isVisible={isAddRecipeVisible}
        setIsVisible={setIsAddRecipeVisible}
      />
    </header>
  );
}

export default Header;
