import React from 'react';
import { shallow } from 'enzyme';
import people from '../../data/yearbook-data.js';
import NewStudentForm from './NewStudentForm';

describe('NewStudentForm', () => {
  it('should call submitStudent when the button is clicked', () => {
    const studentBodyMock = people.students;
    const wrapper = shallow(<NewStudentForm 
      addStudent = {jest.fn()}
      totalStudents = {studentBodyMock}
      />);
    wrapper.instance().submitStudent = jest.fn();
    wrapper.update();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().submitStudent).toHaveBeenCalled();
  });

  it('should invoke addStudent prop with current state as an argument', () => {
    const studentBodyMock = [{name: 'Blib', quote: 'Blob', superlative: 'Blab'}];
    const addStudentMock = jest.fn();
    const wrapper = shallow(<NewStudentForm
      addStudent={addStudentMock}
      totalStudents={studentBodyMock}
    />);
    wrapper.setState({name: 'One', quote: 'Two', superlative: 'Three'});
    const testState = wrapper.state();
    wrapper.instance().props.addStudent(testState);
    expect(wrapper.instance().props.addStudent).toHaveBeenCalledWith(wrapper.state())
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const studentBodyMock = people.students;
    const wrapper = shallow(<NewStudentForm
      addStudent={jest.fn()}
      totalStudents={studentBodyMock}
    />);

    expect(wrapper).toMatchSnapshot();
  })  
})