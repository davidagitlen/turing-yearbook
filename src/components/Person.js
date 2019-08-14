import React from 'react';
import './Person.css';

const Person = ({photo, name, quote, superlative, id}) => {
  return (
    <div className='person' data-id={id}>
      <img src={photo} alt={name + (' looking magnificent')}/>
      <h3>{name}</h3>
      <p>{quote}</p>
      <span>{superlative}</span>
    </div>
  )

}

export default Person;
