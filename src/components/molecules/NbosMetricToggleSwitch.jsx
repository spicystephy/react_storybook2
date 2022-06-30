import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function NbosMetricToggleSwitch() {
  const [alignment, setAlignment] = React.useState('outcome')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      size="small"
    >
      <ToggleButton value="outcome">Outcome Metrics</ToggleButton>
      <ToggleButton value="behavior">Behavior Metrics</ToggleButton>
    </ToggleButtonGroup>
  )
}
