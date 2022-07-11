import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const NbosHighchartsBar = () => {
  const options = {
    chart: {
      type: 'bar',
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
      text: 'Bone Maides vs. This Time Last Year',
      align: 'left',
      x: 15,
    },
    xAxis: {
      categories: [
        'Loan Production',
        'Deposit Growth',
        'TM Growth',
        'New Clients',
      ],
      floor: 0,
      lineWidth: 0,
    },
    yAxis: {
      gridLineWidth: 0,
      lineWidth: 0,
      title: {
        text: 'Revenue',
      },
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
        name: 'RM',
        data: [8.5, 2.5, 2.5, 0],
        color: '#0066ff',
      },
      {
        name: 'This Time Last Year',
        data: [5, 1, 1, 4],
        color: '#bfbfbf',
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
