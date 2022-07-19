/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import { dataFormatter } from 'utilities'

export const NbosHighchartsBar = ({ chartName }) => {
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
    legend: {
      align: 'left',
      x: 15,
    },
    title: {
      text: 'Bone Maides vs. This Time Last Year',
      align: 'left',
      x: 15,
    },
    xAxis: {
      categories:
        chartName === 'outcome'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Average Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
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
      labels: {
        enabled: false,
      },
    },
    // tooltip: {
    //   valueSuffix: ' millions',
    // },
    plotOptions: {
      // bar: {
      //   dataLabels: {
      //     enabled: true,
      //   },
      // },
      series: {
        minPointLength: 3,
        dataLabels: {
          enabled: true,
          formatter: function () {
            if (chartName === 'outcome') {
              if (this.y > 1000 && this.y < 1000000) {
                const value = this.y / 1000
                return `$${value}K`
              } else if (this.y < 1000) {
                return this.y
              } else if (this.y >= 1000000) {
                const value = this.y / 1000000
                return `$${value}M`
              }
            }
          },
        },
      },
    },
    series:
      chartName === 'outcome'
        ? [
            {
              name: 'RM',
              color: '#0066ff',
              data: [
                3180000,
                850000,
                850000,
                { y: 0, color: 0 < 2 ? 'red' : '#0066ff' },
              ],
            },
            {
              name: 'This Time Last Year',
              data: [5000000, 1000000, 1000000, 4],
              color: '#bfbfbf',
            },
          ]
        : [
            {
              name: 'RM',
              data: [4.2, 54, { y: 2, color: 2 <= 2 ? 'red' : '#0066ff' }, 6],
              color: '#0066ff',
            },
            {
              name: 'This Time Last Year',
              data: [5, 84, 11, 4],
              color: '#bfbfbf',
            },
          ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
