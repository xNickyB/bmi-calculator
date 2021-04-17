import React, { Component } from "react";
import Select, { components } from "react-select";
import { mass } from "../../helpers/Docs/data";

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
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
        name="NumGrubs"
        value={mass.find(obj => obj.value === ValueContainer)}
        options={mass}
        isClearable
        components={{
          ValueContainer: CustomValueContainer
        }}
        placeholder="Number of Grubs"
        styles={{
          container: (provided, state) => ({
            ...provided,
            marginTop:30,
            marginLeft: 125,
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
