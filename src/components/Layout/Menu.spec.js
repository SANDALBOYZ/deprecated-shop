/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

describe('<Menu />', () => {
  it('renders', () => {
    const wrapper = shallow(<Menu />)

    expect(wrapper).toMatchSnapshot()
  })
})