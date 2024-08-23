import React from "react";
import {useState, useEffect} from 'react';

import axios from "axios";
import { API_URL } from "../constants";
import RecipeModal from './recipe-modal';

function RecipeCard({name, image, time}) {
    return (
        <div>
            <div className="recipe-preview-box">
                <img
                    className="recipe-preview-image"
                    src={image}
                    alt="Simple white cake"
                />
                <div className="recipe-preview-subtitle">
                    <p>{name}</p>
                </div>
            </div>
            <div className="recipe-preview-tag">
                <div className="recipe-preview-tag-inner">{time} min</div>
            </div>
        </div>
    );
}

function RecipeGrid() {
    const [recipes, setRecipes] = useState([]);
    const [modal, setModal] = useState(false);
    const [recipeId, setRecipeId] = useState(null);

    const toggle = () => {
        setModal(!modal);
    };

    const handleRecipeId = (id) => {
        setRecipeId(id);
    };
  
    useEffect(() => {
      axios.get(API_URL).then((response) => {
        setRecipes(response.data);
      });
    }, []);
  
    if (!recipes) return null;

    return (
        <div>
            <h2>Recipes</h2>
            <hr/>
            <div>
                <div className="card-wrapper">
                    {recipes.map((recipe) => {
                        return (
                            <article key={recipe.pk}>
                                <button onClick={() => {toggle(); handleRecipeId(recipe.pk); }} className="no-padding-button">
                                    <RecipeCard name={recipe.name} image={recipe.image} time={recipe.cook_time_minutes} />
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
            {modal && <RecipeModal modal={modal} toggle={toggle} recipeId={recipeId} />}
        </div>
    );
}

export default RecipeGrid;
