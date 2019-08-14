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

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <h2>Staff Members</h2>
        <Cohort people={this.state.staff} />
        <h2>Students</h2>
        <Cohort people={this.state.studentBody} />
        <NewStudentForm addStudent={this.addStudent} totalStudents={this.state.studentBody}/>
      </div>
    );
  }
}

export default App;
