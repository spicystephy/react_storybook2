import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import { opportunitySummary } from 'stories/data/testData-oppSummary'
import { NbosPage } from './NbosPage'

export const NbosHighchartsColumn = ({ oppSummary }) => {
  console.log(oppSummary)
  // const { y2020, y2021 } = oppSummary

  const options = {
    chart: {
      type: 'column',
      spacingBottom: null,
      spacingTop: null,
      spacingLeft: 1,
      spacingRight: 1,
      marginLeft: 200,
      marginRight: 200,
      width: null,
      height: 300,
    },
    title: {
      text: 'Current vs. Same Time Last Year',
      align: 'center',
    },
    xAxis: {
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD'],
      floor: 0,
      lineWidth: 1,
      gridLineWidth: 0,
    },
    yAxis: {
      title: {
        text: 'Revenue',
        style: { color: 'black' },
      },
      tickAmount: 4,
      gridLineWidth: 1,
      lineWidth: 0,
    },
    tooltip: {
      valueDecimals: 0,
      valuePrefix: '$',
      valueSuffix: ' K',
    },
    plotOptions: {
      column: { pointPadding: 0, borderWidth: 0 },
    },
    series: [
      {
        name: oppSummary.y2020.year,
        color: '#0066ff',
        data: [
          oppSummary.y2020.stage_1,
          oppSummary.y2020.stage_2,
          oppSummary.y2020.stage_3,
          oppSummary.y2020.stage_4,
          oppSummary.y2020.booked_ytd,
        ],
      },
      {
        name: oppSummary.y2021.year,
        color: '#a2c4f7',
        data: [
          oppSummary.y2021.stage_1,
          oppSummary.y2021.stag_e2,
          oppSummary.y2021.stage_3,
          oppSummary.y2021.stage_4,
          oppSummary.y2021.booked_ytd,
        ],
      },
    ],
  }

  return (
    <NbosPage elevation={2}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // oppSummary={oppSummary}
      />
    </NbosPage>
  )
}
