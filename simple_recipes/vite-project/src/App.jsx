import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component, Fragment } from "react"
import Header from "./components/header";
import RecipeGrid from './components/recipe-preview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <RecipeGrid/>
    </div>
  )
}

export default App
