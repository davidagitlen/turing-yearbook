import React from 'react';
import { shallow } from 'enzyme';
import people from '../../data/yearbook-data.js';
import App from './App';

describe('App', () => {
  it('should update state with a new student when addStudent is called', () => {
    const wrapper = shallow(<App />);
    const mockStudent = {
      id: 1,
      name: 'Dorvid',
      quote: 'What the hork?',
      superlative: 'Most likely to be confused'
    };
    const currentStudents = [...people.students]
    const expected = [...currentStudents, mockStudent];

    expect(wrapper.state('studentBody')).toEqual(currentStudents);

    wrapper.instance().addStudent(mockStudent);

    expect(wrapper.state('studentBody')).toEqual(expected);
  });

  it('should update a student\'s information when editStudent is called', () => {
    const wrapper = shallow(<App />);
    const firstStudent = {
      id: 21,
      name: 'Chris',
      quote: 'I love kicking puppies. Also, if I were a pokemon I would be clefairy!',
      superlative: 'Most Likely To Kick a Puppy',
      photo: 'https://placekitten.com/200/300'
    }
    const testEdits = {
      id: 21,
      name: 'Robbie',
      quote: 'Look at me, I\'m Robbie!',
      superlative: 'Most Likely to Be Recognized as Robbie',
      photo: 'https://placekitten.com/200/300'
    }
    expect(wrapper.state('studentBody')[0]).toEqual(firstStudent);

    wrapper.instance().editStudent(testEdits);

    expect(wrapper.state('studentBody')[0]).toEqual(testEdits);
  });

  it('should update state with a new array lacking a specific student when remove a student when deleteStudent is called', () => {
    const wrapper = shallow(<App />);
    const testStudents = [
      {id: 1, name: 'Chris'},
      {id: 2, name: 'David'}
    ];
    wrapper.setState({studentBody : testStudents});

    wrapper.instance().deleteStudent(1);

    expect(wrapper.state('studentBody')).toEqual([{ id: 2, name: 'David' }]);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  })
})
