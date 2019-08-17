import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      quote: this.props.quote,
      superlative: this.props.superlative,
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.getAttribute('name')]: event.target.innerText });
  }

  render() {
    return (
      <div className='person' data-id={this.props.id}>
        <img src={this.props.photo} alt={this.props.name + (' looking magnificent')}/>
        <h3 
          contentEditable={this.props.cohort === 'student' ? 'true' : 'false'}
          suppressContentEditableWarning='true' 
          name='name'
          onKeyUp={event => this.handleChange(event)}
          >{this.props.name}</h3>
        <p 
          contentEditable={this.props.cohort === 'student' ? 'true' : 'false'}
          suppressContentEditableWarning='true' 
          name='quote'
          onKeyUp={event => this.handleChange(event)}
          >{this.props.quote}</p>
        <span 
          contentEditable={this.props.cohort === 'student' ? 'true' : 'false'}
          suppressContentEditableWarning='true' 
          name='superlative'
          onKeyUp={event => this.handleChange(event)}
          >{this.props.superlative}</span>
        <button 
          onClick={() => this.props.deleteStudent(this.props.id)}
          className={this.props.cohort === "student" ? "" : "display-none"}
          >Delete Me!</button>
      </div>
    )
  }
}

export default Person;
