import React from 'react'

export default function ResultField({fieldName, result, onPointsChange}) {
  let resultTruncated = Math.floor(result * 100) / 100
  return (
    <div class="field">
      <label class="label">{fieldName}</label>
      <div class="control">
      <input class="input" type="number" value={resultTruncated} readonly></input>
      </div>
    </div>
  )
}
