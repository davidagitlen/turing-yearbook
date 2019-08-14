import React, {Component} from 'react';
import "./NewStudentForm.css";

class NewStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : '',
      id : this.props.totalStudents.length * 2,
      photo: 'https://placekitten.com/200/300',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  submitStudent = (event) => {
    event.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      name : '',
    })
  }

  render() {
    return (
      <form className="new-student-form">
        <h3>Add a New Student!</h3>
        <input 
          type="text" 
          placeholder="Student Name" 
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)} />
        <button
          onClick={event => this.submitStudent(event)}>Add New Student</button>
      </form>
    )
  }
}

export default NewStudentForm;