import React from 'react';
import { shallow } from 'enzyme';
import people from '../../data/yearbook-data.js';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cohort 
      cohort='staff'
      people={people.staff}
      deleteStudent={jest.fn()}
      editStudent={jest.fn()}
      />);
    expect(wrapper).toMatchSnapshot();
  })
})