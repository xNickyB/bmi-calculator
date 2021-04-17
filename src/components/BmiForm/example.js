import React, { Component } from "react";
import { dims } from "../../helpers/Docs/data";
import Select from 'react-select';
import {components} from 'react-select';


const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
    const { getValue, hasValue } = props;
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};




export default class SingleSelect extends Component {
  render() {
    return (
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        value={dims.find(obj => obj.value === ValueContainer)}
        options={dims}
        isClearable
        components={{
          ValueContainer: CustomValueContainer
        }}
        placeholder="Kit Dimensions"
        styles={{
          container: (provided, state) => ({
            ...provided,
            marginTop: 30,
            marginRight: 125,
          }),
          valueContainer: (provided, state) => ({
            ...provided,
            overflow: "visible"
          }),
          placeholder: (provided, state) => ({
            ...provided,
            position: "absolute",
            top: state.hasValue || state.selectProps.inputValue ? -15 : "50%",
            transition: "top 0.1s, font-size 0.1s",
            fontSize: (state.hasValue || state.selectProps.inputValue) && 13
          })
        }}
      />
    );
  }
}
