import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({people, deletePerson}) => {
  const turingPeople = people.map(person => {
    return (
      <Person 
        photo={person.photo}
        name={person.name}
        quote={person.quote}
        superlative={person.superlative}
        id={person.id}
        key={person.id}
        deletePerson={deletePerson}
        />
    )
  })

  return (
    <div className='cohort'>
      {turingPeople}
    </div>
    )
}

export default Cohort;