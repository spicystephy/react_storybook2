import React, { useState } from 'react'
import { NbosHighchartsBar } from 'components/molecules/NbosHighchartsBar'
import { NbosMetricToggleSwitch } from 'components/molecules/NbosMetricToggleSwitch'
import { NbosPage } from 'components/molecules/NbosPage'

export const NbosMetrics = ({ chartData, users }) => {
  const [chartName, setChartName] = useState('outcome')

  const onChange = (event, name) => {
    setChartName(name)
  }

  return (
    <NbosPage elevation={2}>
      <div className="tw-flex tw-justify-end tw-p-2">
        <NbosMetricToggleSwitch
          changeHandler={onChange}
          chartName={chartName}
        />
      </div>
      <div>
        <NbosHighchartsBar
          chartName={chartName === 'outcome' ? 'outcome' : 'behavior'}
          chartData={chartData}
          users={users}
        />
      </div>
    </NbosPage>
  )
}

// export const NbosMetrics = () => {
//   const [chartName, setChartName] = React.useState('outcome')

//   const onChange = name => {
//     setChartName(name)
//   }
//   return (
//     <NbosPage elevation={2}>
//       <div className="tw-flex tw-justify-end tw-p-2">
//         <NbosMetricToggleSwitch changeHandler={onChange} />
//       </div>
//       <div>
//         <NbosHighchartsBar chartName={chartName} />
//       </div>
//     </NbosPage>
//   )
// }
