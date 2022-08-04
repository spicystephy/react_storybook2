import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function NbosMetricToggleSwitch({ changeHandler }) {
  const [toggle, setToggle] = React.useState('outcome')

  const handleChange = (event, newValue) => {
    // changes the toggle btn
    setToggle(newValue)
    // displays selected chart data
    changeHandler(newValue)
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={toggle}
      exclusive
      onChange={handleChange}
      size="small"
    >
      <ToggleButton value="outcome">Outcome Metrics</ToggleButton>
      <ToggleButton value="behavior">Behavior Metrics</ToggleButton>
    </ToggleButtonGroup>
  )
}
