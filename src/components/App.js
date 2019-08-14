import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import NewStudentForm from './NewStudentForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // people: people.staff.concat(people.students),
      staff: people.staff,
      studentBody: people.students
    }
  }

  addStudent = (newStudent) => {
    this.setState({studentBody: [...this.state.studentBody, newStudent]});
  } 

  deletePerson = (id) => {
    const filteredStaff = 
    this.state.staff.filter(staffPerson => staffPerson.id !== id);
    const filteredStudents = 
    this.state.studentBody.filter(student => student.id !== id);
    this.setState({staff: filteredStaff, studentBody: filteredStudents});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <h2>Staff Members</h2>
        <Cohort 
          people={this.state.staff} 
          deletePerson={this.deletePerson}/>
        <h2>Students</h2>
        <Cohort 
          people={this.state.studentBody} 
          deletePerson={this.deletePerson}/>
        <NewStudentForm addStudent={this.addStudent} deletePerson={this.deletePerson} totalStudents={this.state.studentBody}/>
      </div>
    );
  }
}

export default App;
