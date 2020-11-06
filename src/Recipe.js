import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1> {title} </h1>
      <ol>
        <strong>Ingredient you need:</strong>
        {ingredients.map((ingredient) => (
          <li> {ingredient.text}</li>
        ))}
      </ol>
      <p> Calories = {Math.floor(calories)} cal</p>
      <img className={style.image} src={image} alt="Food" />
    </div>
  );
};

export default Recipe;
