import React from "react";
import {useState, useEffect} from 'react';

import axios from "axios";
import { API_URL } from "../constants";

function RecipeCard({name, time}) {
    return (
        <div>
            <div className="recipe-preview-box">
                <img
                    className="recipe-preview-image"
                    src="/src/assets/images/simple-cake.png"
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
  
    useEffect(() => {
      axios.get(API_URL).then((response) => {
        setRecipes(response.data);
      });
    }, []);
  
    if (!recipes) return null;

    return (
        <div>
            <button>Add Recipe</button>
            <h2>Recipes</h2>
            <hr/>
            <header className="filter-options">
                <button>&lt; 20 min</button>
                <button>30 min - 1 hour</button>
                <button>&gt; 1 hour</button>
            </header>
            <div>
                <div className="card-wrapper">
                    {recipes.map((recipe) => {
                        return (
                            <article key={recipe.pk}>
                                <RecipeCard name={recipe.name} time={recipe.cook_time_minutes} />
                                {/* <h2>{recipe.name}</h2>
                                <span>{recipe.cook_time_minutes}</span> */}
                            </article>
                        );
                    })}

                    {/* <article>
                        <RecipeCard/>
                    </article>
                    <article>
                        <RecipeCard/>
                    </article>
                    <article>
                        <RecipeCard/>
                    </article>
                    <article>
                        <RecipeCard/>
                    </article>
                    <article>
                        <RecipeCard/>
                    </article>
                    <article>
                        <RecipeCard/>
                    </article> */}
                </div>
            </div>
        </div>
    );
}

export default RecipeGrid;
