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
      color: state.isSelected ? 'e74c3c' : 'black',
      backgroundColor: state.isSelected ? '#32408f': 'white',
      opacity: 0.5
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "10%",
    })
  }

  const styles = {
    control: (base) => ({
      ...base,
      minHeight: 32,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  };



const massDropDown = () => (
    <Select className="row justify-space-around"
    styles = { customStyles }
    placeholder = "Feed Mass (Kg)"
    options = { options }
  />
)

export default massDropDown;