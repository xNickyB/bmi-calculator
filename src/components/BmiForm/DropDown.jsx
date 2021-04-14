import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: '5', label: '5 Kg' },
  { value: '10', label: '10 Kg' },
  { value: '15', label: '15 Kg' }
]


const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px  blue',
      color: state.isSelected ? '#3f51b5' : 'black',
      backgroundColor: state.isSelected ? '#3f51b5' : 'white'
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    })
  }

const DropDown = () => (
    <Select className="col-md-8 col-offset-4"
    styles = { customStyles }
    options = { options }
  />
)

export default DropDown;