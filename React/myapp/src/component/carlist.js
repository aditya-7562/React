import React from 'react'

function Carlist ({cars}){
    return (
        <ul>
            {cars.map((car) => (
                <li key = {car.brand}>
                    {car.brand} - {car.model}
                </li>
            ))}
        </ul>
    )
}

function App() {
    const cars = [
        {brand : "Honda", model : "City"},
        {brand : "Skoda", model : "Slavia"},
        {brand : "Hyundai", model : "Verna"},
    ]
  return (
    <div>
        <h1>My Car Details</h1>
        <Carlist cars = {cars} />
    </div>
  )
}

export default App;