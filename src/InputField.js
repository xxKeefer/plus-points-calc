import React from 'react'

export default function inputField({ fieldName, inputValue, onPointsChange, setStep = 1000 }) {
  return (
    <div class='field'>
      <label class='label'>{fieldName}</label>
      <div class='control'>
        <input
          class='input'
          type='number'
          step={setStep}
          value={inputValue}
          onChange={onPointsChange}
        ></input>
      </div>
    </div>
  );
}
