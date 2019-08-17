import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import NewStudentForm from './NewStudentForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      studentBody: people.students
    }
  }

  addStudent = (newStudent) => {
    this.setState({studentBody: [...this.state.studentBody, newStudent]});
  }

  editStudent = (editedStudent) => {
    let editedStudentBody = [...this.state.studentBody];
    editedStudentBody.forEach(student => {
      if(student.id === editedStudent.id) {
        student.name = editedStudent.name;
        student.quote = editedStudent.quote;
        student.superlative = editedStudent.superlative;
      }
    });
    this.setState({studentBody: editedStudentBody});
  }

  deleteStudent = (id) => {
    const filteredStudents = 
    this.state.studentBody.filter(student => student.id !== id);
    this.setState({studentBody: filteredStudents});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <h2>Staff Members</h2>
        <Cohort
          cohort="staff"
          people={this.state.staff}/>
        <h2>Students</h2>
        <Cohort 
          cohort="student"
          people={this.state.studentBody} 
          deleteStudent={this.deleteStudent}
          editStudent={this.editStudent}/>
        <NewStudentForm addStudent={this.addStudent} deletePerson={this.deletePerson} totalStudents={this.state.studentBody}/>
      </div>
    );
  }
}

export default App;
