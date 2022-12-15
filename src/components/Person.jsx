import React from 'react'

function Person({name, height, mass}) {
    return (
        <div className='Person'>
            <h1>{name}</h1>
            <h2>{height}</h2>
            <p>{mass}</p>
        </div>
    )
}
export default Person;