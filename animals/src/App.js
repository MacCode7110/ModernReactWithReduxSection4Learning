//Import CSS files above other React hooks and components.
import './App.css';
import { useState } from 'react'
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        // Never modify a piece of state directly! ALWAYS use the setter function to update a piece of state.
        // Spread operator spreads all of the entries in a referenced array into entries stored in a new array or collection of elements.
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;