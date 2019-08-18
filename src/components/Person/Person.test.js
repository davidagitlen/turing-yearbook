import React from 'react';
import { shallow } from 'enzyme';
import people from '../../data/yearbook-data.js';
import Person from './Person';

let testPerson, wrapper; 

describe('Person', () => {

  it('should call editStudent prop with the Card\'s edited state when an edited element loses focus', () => {
    const editStudentMock = jest.fn();
    const testPerson = people.students[0];
    const wrapper = shallow(<Person 
      photo={testPerson.photo}
      name={testPerson.name}
      quote={testPerson.quote}
      superlative={testPerson.superlative}
      id={testPerson.id}
      editStudent={editStudentMock}
    />);
    expect(wrapper.state().name).toEqual('Chris');
    wrapper.setState({name : 'Change!'});
    wrapper.find('h3').simulate('blur');
    expect(editStudentMock).toHaveBeenCalledWith({
      id : 21,
      name: 'Change!',
      quote: 'I love kicking puppies. Also, if I were a pokemon I would be clefairy!',
      superlative: 'Most Likely to Kick a Puppy'
    });
    expect(wrapper.state().name).toEqual('Change!');
  });

  it('should fire handleChange on keyup when an element has been edited', () => {
    const eventMock = { 
      target: { 
        name: 'name', 
        getAttribute: function () {return this['name']},
        innerText: 'test' }
      };
    const testPerson = people.students[0];
    const wrapper = shallow(<Person
      photo={testPerson.photo}
      name={testPerson.name}
      quote={testPerson.quote}
      superlative={testPerson.superlative}
      id={testPerson.id}
    />);
    wrapper.instance().handleChange = jest.fn();
    wrapper.update();
    wrapper.find('h3').simulate('keyup', eventMock);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should call deleteStudent prop with the person\'s id when the button is clicked', () => {
    const deleteStudentMock = jest.fn();
    const testPerson = people.students[0];
    const wrapper = shallow(<Person
      photo={testPerson.photo}
      name={testPerson.name}
      quote={testPerson.quote}
      superlative={testPerson.superlative}
      id={testPerson.id}
      deleteStudent={deleteStudentMock}
    />);
    wrapper.find('button').simulate('click');
    expect(deleteStudentMock).toHaveBeenCalledWith(21);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const testPerson = people.students[0];
    const wrapper = shallow(<Person
      photo={testPerson.photo}
      name={testPerson.name}
      quote={testPerson.quote}
      superlative={testPerson.superlative}
      id={testPerson.id}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if the card\'s cohort prop is student', () => {
    const testPerson = people.students[0];
    const wrapper = shallow(<Person
      photo={testPerson.photo}
      name={testPerson.name}
      quote={testPerson.quote}
      superlative={testPerson.superlative}
      id={testPerson.id}
      cohort='student'
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if the card\'s cohort prop is staff', () => {
    const testPerson = people.staff[0];
    const wrapper = shallow(<Person
      photo={testPerson.photo}
      name={testPerson.name}
      quote={testPerson.quote}
      superlative={testPerson.superlative}
      id={testPerson.id}
      cohort='staff'
    />);

    expect(wrapper).toMatchSnapshot();
  });
  
})