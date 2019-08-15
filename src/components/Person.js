import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='person' data-id={this.props.id}>
        <img src={this.props.photo} alt={this.props.name + (' looking magnificent')}/>
        <h3 contentEditable='true' suppressContentEditableWarning='true'>{this.props.name}</h3>
        <p contentEditable='true' suppressContentEditableWarning='true'>{this.props.quote}</p>
        <span contentEditable='true' suppressContentEditableWarning='true'>{this.props.superlative}</span>
        <button onClick={() => this.props.deletePerson(this.props.id)}>Delete Me!</button>
      </div>
    )
  }
}

export default Person;
