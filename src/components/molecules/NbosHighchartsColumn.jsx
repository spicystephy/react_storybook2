import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { opportunitySummary } from 'stories/data/testData-oppSummary'

export const NbosHighchartsColumn = () => {
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
        name: opportunitySummary[2].year,
        color: '#0066ff',
        data: [
          opportunitySummary[2].stage_1,
          opportunitySummary[2].stage_2,
          opportunitySummary[2].stage_3,
          opportunitySummary[2].stage_4,
          opportunitySummary[2].booked_ytd,
        ],
      },
      {
        name: opportunitySummary[1].year,
        color: '#a2c4f7',
        data: [
          opportunitySummary[1].stage_1,
          opportunitySummary[1].stage_2,
          opportunitySummary[1].stage_3,
          opportunitySummary[1].stage_4,
          opportunitySummary[1].booked_ytd,
        ],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
