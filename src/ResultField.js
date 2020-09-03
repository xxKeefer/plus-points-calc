import React from 'react'

export default function ResultField({fieldName, result, onPointsChange}) {
  return (
    <div class="field">
      <label class="label">{fieldName}</label>
      <div class="control">
        <input class="input" type="number" value={result} readonly></input>
      </div>
    </div>
  )
}
