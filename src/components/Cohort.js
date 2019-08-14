import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({people}) => {
  const turingPeople = people.map(person => {
    return (
      <Person 
        photo={person.photo}
        name={person.name}
        quote={person.quote}
        superlative={person.superlative}
        id={person.id}
        key={person.id}
        />
    )
  })

  // const students = studentBody.map(person => {
  //   return (
  //     <Person
  //       photo={person.photo}
  //       name={person.name}
  //       quote={person.quote}
  //       superlative={person.superlative}
  //       id={person.id}
  //       key={person.id}
  //     />
  //   )
  // })

  return (
    <div className='cohort'>
      {turingPeople}
    </div>
    )
}

export default Cohort;