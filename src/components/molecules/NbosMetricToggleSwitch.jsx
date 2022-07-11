import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function NbosMetricToggleSwitch({ changeHandler }) {
  const [metric, setMetric] = React.useState('outcome')

  const handleChange = (event, newMetric) => {
    setMetric(newMetric)
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={metric}
      exclusive
      onChange={handleChange}
      size="small"
    >
      <ToggleButton value="outcome">Outcome Metrics</ToggleButton>
      <ToggleButton value="behavior">Behavior Metrics</ToggleButton>
    </ToggleButtonGroup>
  )
}
