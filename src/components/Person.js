import React from 'react'

function Person({person}) {
    // const {person} = props
    return (
        <div>
            <h2>I am {person.name}, I am {person.age} years old, I know {person.skill}</h2>
        </div>
    )
}

export default Person
