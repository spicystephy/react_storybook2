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
      title: {
        text: 'Revenue',
      },
      tickAmount: 4,
      gridLineWidth: 1,
      lineWidth: 0,
    },
    // tooltip: {
    //   valueSuffix: ' millions',
    // },
    plotOptions: {
      column: { pointPadding: 0, borderWidth: 0 },
    },
    series: [
      {
        name: '2021',
        data: [1350, 1300, 600, 1350, 1350],
        color: '#0066ff',
      },
      {
        name: '2020',
        data: [1550, 1200, 1650, 1550, 1300],
        color: '#a2c4f7',
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
