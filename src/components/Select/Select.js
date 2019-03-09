// @flow

import React from 'react'
import ReactSelect from 'react-select'

const Select = ({ options, onChange, value }) => (
  <Select
    options={options}
    classNamePrefix='react-select'
    onChange={onChange}
    value={value}
    isSearchable={false}
    styles={selectStyles({
      selectControlWidth: this.selectControlWidth()
    })}
  />
)

export default Select
