import React from 'react'

export default function Greeting() {

  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animaList = animals.map(animal => <li key={animal}>{animal}</li> )

  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!!!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>
      <div>
      <h1>Animals: </h1>
      <ul>
        {animaList}
      </ul>
    </div>
    </>
  )
}
