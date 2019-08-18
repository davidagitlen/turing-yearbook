import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({cohort, people, deleteStudent, editStudent}) => {
  const turingPeople = people.map(person => {

    return (
      <Person 
        photo={person.photo}
        name={person.name}
        quote={person.quote}
        superlative={person.superlative}
        id={person.id}
        key={person.id}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
        cohort={cohort}
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