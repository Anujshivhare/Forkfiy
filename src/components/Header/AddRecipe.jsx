import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import InputField from "../UI/InputField";
import Message from "../UI/Message";
import icons from "../../assets/icons.svg";
import { postRecipe } from "../../util/http";

function AddRecipe({ isVisible, setIsVisible }) {
  const [formData, setFormData] = useState({
    title: "",
    sourceUrl: "",
    image: "",
    publisher: "",
    cookingTime: 0,
    servings: 0,
    ingredients: ["", "", "", "", "", ""],
  });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const { mutate } = useMutation({
    mutationFn: postRecipe,
    onSuccess: () => {
      setMessage("Recipe added successfully");
      setShowMessage(true);
    },
    onError: (error) => {
      setMessage(error.message);
      setShowMessage(true);
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "cookingTime" || name === "servings") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parseInt(value, 10),
      }));
    } else if (name.startsWith("ingredient-")) {
      const index = parseInt(name.split("-")[1], 10) - 1;
      const newIngredients = [...formData.ingredients];
      newIngredients[index] = value;
      setFormData((prevData) => ({
        ...prevData,
        ingredients: newIngredients,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutate({ recipe: formData });
  }

  return (
    <>
      <div className={`overlay ${!isVisible && "hidden"}`}></div>
      <div className={`add-recipe-window ${!isVisible && "hidden"}`}>
        <button
          className="btn--close-modal"
          onClick={() => {
            setShowMessage(false);
            setIsVisible(false);
          }}
        >
          &times;
        </button>

        <form className="upload" onSubmit={handleSubmit}>
          {showMessage && <Message message={message}></Message>}
          {!showMessage && (
            <>
              <div className="upload__column">
                <h3 className="upload__heading">Recipe data</h3>

                <InputField
                  label="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  name="title"
                  type="text"
                />

                <InputField
                  label="URL"
                  value={formData.sourceUrl}
                  onChange={handleChange}
                  required
                  name="sourceUrl"
                  type="text"
                />

                <InputField
                  label="Image URL"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  name="image"
                  type="text"
                />

                <InputField
                  label="Publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  required
                  name="publisher"
                  type="text"
                />

                <InputField
                  label="Prep time"
                  value={formData.cookingTime}
                  onChange={handleChange}
                  required
                  name="cookingTime"
                  type="number"
                />

                <InputField
                  label="Servings"
                  value={formData.servings}
                  onChange={handleChange}
                  required
                  name="servings"
                  type="number"
                />
              </div>

              <div className="upload__column">
                <h3 className="upload__heading">Ingredients</h3>

                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <InputField
                    key={index}
                    label={`Ingredient ${index}`}
                    value={formData.ingredients[index - 1]}
                    onChange={handleChange}
                    name={`ingredient-${index}`}
                    type="text"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                ))}
              </div>

              <button className="btn upload__btn" type="submit" disabled>
                <svg>
                  <use href={`${icons}#icon-upload-cloud`}></use>
                </svg>
                <span>Upload (DISABLED) </span>
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
