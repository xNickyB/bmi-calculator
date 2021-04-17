import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { dims } from "../../helpers/Docs/data";
import { mass } from "../../helpers/Docs/data";
import { getData, storeData } from '../../helpers/localStorage';
import Select from "react-select";
import {components} from 'react-select';

const App = () => {
  const initialState = [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

let dimSelect = null;
let massSelect = null;


const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
    const { getValue, hasValue } = props;
    let aValue = getValue();
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
  
const handleChange = selectedOption => {
  selectedOption.dimensions = selectedOption.value;
  let newVal = [...state, selectedOption];
  setState(newVal);
  console.log("Newval was " + newVal)
};

const handleChange2 = selectedOption => {
  selectedOption.numGrubs = selectedOption.value;
  console.log(state);
  selectedOption.id = uuidv4();
  console.log("State [numGrubs] was: " + selectedOption.numGrubs);
  let newVal = [...state, selectedOption];
  console.log('Newval was: ' + newVal)
  setState(newVal);
  console.log("State length was: " + state.length);
  console.log(state);
};
  
  

  const handleDelete = id => {
    storeData('lastState', state);
    let newState = state.filter(i => {
      return i.id !== id;
    });
    setState(newState);
  };

  const handleUndo = () => {
    setState(getData('lastState'));
  };




  return (
    <div className='container'>
      <div className='row center'>
      <h1> Calculate Hatchery Density </h1>
      </div>
      <div className='row'>
        <div>
          {/* <BmiForm change={handleChange} /> */}
          <div className="row-C">
          <Select
        className="basic-single"
        classNamePrefix="select"
        name="dimensions"
        value={dims.find(obj => obj.value === ValueContainer)}
        options={dims}
        isClearable
        onChange = {handleChange}
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
            <Select
        className="basic-single"
        classNamePrefix="select"
        name="numGrubs"
        value={mass.find(obj => obj.value === ValueContainer)}
        options={mass}
        onChange = {handleChange2}
        isClearable
        components={{
          ValueContainer: CustomValueContainer
        }}
        placeholder="Number of Grubs"
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
          </div>
          {/* <Bar labelData={data.date} bmiData={data.bmi} /> */}
          {/* <div className="center">
				    <button
					  id="bmi-btn"
					  className="calculate-btn"
            onSubmit = {handleSubmit}
					  type="button"
				  	disabled={state.weight === '' || state.height === ''}

				    >
					    Calculate Kit Density
				    </button>
			    </div> */}
          <div>
            <div className='data-container row'>
              {console.log(state)} 
              {console.log(state.length)}
              {state.length > 1 ? (
                <div className="col m6 s12">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title" data-test="bmi">
                  Hatchery Kit Density: 10 lb/in^3 
                  </span>
                  <div className="card-data">
                    <span data-test="weight">Kit Dimensions Standard: 10" </span>
                    <span data-test="height">Mass of Grubs: 100 grams </span>
            </div>

          </div>
          </div>
          </div>
              ) : (
                  <div className='center white-text'></div>
                )}
              {state.length > 3 ? (
                <div className="col m6 s12">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title" data-test="bmi">
                  Hatchery Kit Density: 17.64 lb/in^3 
                  </span>
                  <div className="card-data">
                    <span data-test="weight">Kit Dimensions Standard: 17" </span>
                    <span data-test="height">Mass of Grubs: 300 grams </span>
            </div>

          </div>
          </div>
          </div>
              ) : (
                  <div className='center white-text'></div>
                )}
                
            </div>
          </div>
          {getData('lastState') !== null ? (
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          ) : (
              ''
            )}
        </div>
      </div>
    </div>
  );
};

export default App;
