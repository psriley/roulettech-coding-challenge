import React from "react";
import {useState, useEffect} from "react";
import {Form, FormGroup, Label, Input} from "reactstrap";
import ReactModal from "react-modal";

import axios from "axios";
import { API_URL } from "../constants";

const customStyles = {
    content: {
        backgroundColor: '#6f6f6f',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '500px',
    },
};

function RecipeDetails({recipe}) {
    return (
        <div>
            {recipe ? (
                <>
                    <h2>{recipe.name}</h2>
                    <hr/>
                    <div>
                        <p>{recipe.description || "Description not available."}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4><b>Cook Time:</b> {recipe.cook_time_minutes} min</h4>
                            <h4><b>Serving Size:</b> {recipe.serving_size}</h4>
                        </div>
                    </div>
                    <hr/>
                    <h4><b>Ingredients</b></h4>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.length > 0 ? (
                            recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.amount} {ingredient.ingredient}
                                </li>
                            ))
                        ) : (
                            <p>No ingredients available.</p>
                        )}
                    </ul>
                    <hr/>
                    <h4><b>Instructions</b></h4>
                    <ol>
                        {recipe.instruction_set && recipe.instruction_set.length > 0 ? (
                            recipe.instruction_set.map((instruction, index) => (
                                <li key={index}>
                                    {instruction.text}
                                </li>
                            ))
                        ) : (
                            <p>No instructions available.</p>
                        )}
                    </ol>
                </>
            ) : (
                <p>Loading recipe...</p>
            )}
        </div>
    )
}

function CreateRecipe() {
    return (
        <Form style={{ margin: 25 }}>
            <FormGroup>
                <Label for="name">
                    Name:
                </Label>
                <Input
                    type="text"
                    name="name"
                />
            </FormGroup>
        </Form>
    )
}

function RecipeModal({modal, toggle, recipeId}) {
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
        if (recipeId) {
            axios.get(API_URL+`${recipeId}`)
                .then((response) => {
                    setRecipe(response.data);
                })
                .catch((error) => {
                    console.error("There was an error fetching the recipe data!", error);
                });
        }
    }, [recipeId]); // If recipeId changes, this is refetched

    const handleCloseModal = () => {
        toggle();
    }

    return (
        <ReactModal 
            style={customStyles}
            isOpen={modal}
            contentLabel="Modal"
        >
            <button onClick={handleCloseModal}>Close Modal</button>
            <RecipeDetails recipe={recipe} />
            {/* <CreateRecipe/> */}
        </ReactModal>
    )
}

export default RecipeModal;
