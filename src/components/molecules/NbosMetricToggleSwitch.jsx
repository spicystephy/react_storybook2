import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export const NbosMetricToggleSwitch = ({ changeHandler, chartName }) => {
  const [toggle, setToggle] = useState('outcome')

  const handleChange = newValue => {
    // changes the toggle btn
    setToggle(newValue)
    // displays selected chart data
    changeHandler(newValue)
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={chartName}
      exclusive
      onChange={changeHandler}
      size="small"
    >
      <ToggleButton value="outcome">Outcome Metrics</ToggleButton>
      <ToggleButton value="behavior">Behavior Metrics</ToggleButton>
    </ToggleButtonGroup>
  )
}

// export const NbosMetricToggleSwitch = ({ changeHandler }) => {
//   const [toggle, setToggle] = React.useState('outcome')

//   const handleChange = (event, newValue) => {
//     // changes the toggle btn
//     setToggle(newValue)
//     // displays selected chart data
//     changeHandler(newValue)
//   }

//   return (
//     <ToggleButtonGroup
//       color="primary"
//       value={toggle}
//       exclusive
//       onChange={handleChange}
//       size="small"
//     >
//       <ToggleButton value="outcome">Outcome Metrics</ToggleButton>
//       <ToggleButton value="behavior">Behavior Metrics</ToggleButton>
//     </ToggleButtonGroup>
//   )
// }
