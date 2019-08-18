import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      quote: this.props.quote,
      superlative: this.props.superlative,
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.getAttribute('name')]: event.target.innerText });
  }

  render() {
    const editableClass = this.props.cohort === 'student' ? 'true' : 'false';
    const displayClass = this.props.cohort === "student" ? "" : "display-none"; 

    return (
      <div className='person' data-id={this.props.id}>
        <img src={this.props.photo} alt={this.props.name + (' looking magnificent')}/>
        <h3 
          contentEditable={editableClass}
          suppressContentEditableWarning='true' 
          name='name'
          onKeyUp={event => this.handleChange(event)}
          onBlur={() => this.props.editStudent(this.state)}
          >{this.props.name}</h3>
        <p 
          contentEditable={editableClass}
          suppressContentEditableWarning='true' 
          name='quote'
          onKeyUp={event => this.handleChange(event)}
          onBlur={() => this.props.editStudent(this.state)}
          >{this.props.quote}</p>
        <span 
          contentEditable={editableClass}
          suppressContentEditableWarning='true' 
          name='superlative'
          onKeyUp={event => this.handleChange(event)}
          onBlur={() => this.props.editStudent(this.state)}
          >{this.props.superlative}</span>
        <button 
          onClick={() => this.props.deleteStudent(this.props.id)}
          className={displayClass}
          >Delete Me!</button>
      </div>
    )
  }
}

export default Person;
