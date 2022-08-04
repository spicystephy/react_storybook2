import * as React from 'react'
import { NbosHighchartsBar } from 'components/molecules/NbosHighchartsBar'
import NbosMetricToggleSwitch from 'components/molecules/NbosMetricToggleSwitch'
import { NbosPage } from 'components/molecules/NbosPage'

export const NbosMetrics = () => {
  const [chartName, setChartName] = React.useState('outcome')

  const handleToggle = name => {
    setChartName(name)
  }
  return (
    <NbosPage elevation={2}>
      <div className="tw-flex tw-justify-end tw-p-2">
        <NbosMetricToggleSwitch changeHandler={handleToggle} />
      </div>
      <div>
        <NbosHighchartsBar chartName={chartName} />
      </div>
    </NbosPage>
  )
}
