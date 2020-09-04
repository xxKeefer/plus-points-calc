import React from 'react'

export default function PointsValue({ pointsOptions, selectedPointsValue, onChangePointsValue}) {
  return (
    <div class="select">
      <select value={selectedPointsValue} onChange={onChangePointsValue}>
        {pointsOptions.map(option => (
          <option key={option} value={option}>{option} Points per Dollar</option>
        ))}
      </select>
    </div>
  )
}
