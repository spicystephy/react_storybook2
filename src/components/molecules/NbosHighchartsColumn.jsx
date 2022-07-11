import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

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
      gridLineWidth: 1,
      lineWidth: 0,
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: '2021',
        data: [8.5, 2.5, 2.5, 6],
        color: '#0066ff',
      },
      {
        name: '2020',
        data: [5, 1, 1, 4],
        color: '#a2c4f7',
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
