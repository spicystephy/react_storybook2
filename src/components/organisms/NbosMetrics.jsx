import { NbosHighchartsBar } from 'components/molecules/NbosHighchartsBar'
import { NbosMetricToggleSwitch } from 'components/molecules/NbosMetricToggleSwitch'
import { NbosPage } from 'components/molecules/NbosPage'

export const NbosMetrics = ({ chartType, toggle }) => {
  return (
    <NbosPage elevation={2}>
      <div>
        <NbosMetricToggleSwitch toggle={toggle} />
      </div>
      <div>
        <NbosHighchartsBar chartType={chartType} />
      </div>
    </NbosPage>
  )
}
