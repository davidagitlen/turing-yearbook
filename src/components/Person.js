import React from 'react';
import './Person.css';

const Person = ({photo, name, quote, superlative, id, deletePerson}) => {
  return (
    <div className='person' data-id={id}>
      <img src={photo} alt={name + (' looking magnificent')}/>
      <h3 contentEditable='true' suppressContentEditableWarning='true'>{name}</h3>
      <p contentEditable='true' suppressContentEditableWarning='true'>{quote}</p>
      <span contentEditable='true' suppressContentEditableWarning='true'>{superlative}</span>
      <button onClick={() => deletePerson(id)}>Delete Me!</button>
    </div>
  )

}

export default Person;
