// import { PropTypes } from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { NbosPage } from './NbosPage'
import { dataFormatter } from 'utilities'

export const NbosHighchartsBar = ({ chartName, chartData, users }) => {
  const options = {
    chart: {
      type: 'bar',
      marginLeft: 200,
      marginRight: 200,
      width: null,
      height: 300,
      spacingLeft: 10,
      spacingRight: 10,
    },
    legend: {
      align: 'left',
      x: 15,
    },
    title: {
      text: `${users.userName} vs. This Time Last Year`,
      align: 'left',
      x: 15,
    },
    xAxis: {
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      categories:
        chartName === 'outcome'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ],
      floor: 0,
      lineWidth: 0,
      labels: {
        style: {
          color: 'black',
        },
      },
    },
    yAxis: {
      gridLineWidth: 0,
      lineWidth: 0,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          formatter: function () {
            if (this.y < 100) {
              return (this.y * 1000).toString().replace('000', '') // this.y
            } else if (this.y > 10000 && this.y < 1000000) {
              const value = (this.y / 1000).toFixed(2)
              return `$${value} K`
            } else if (this.y > 1000000) {
              const value = (this.y / 1000000).toFixed(2)
              return `$${value} MM`
            }
          },
        },
      },
    },

    tooltip: {
      valueDecimals: 0,
      valuePrefix: chartName === 'outcome' ? '$' : null,
    },
    series:
      chartName === 'outcome'
        ? [
            {
              name: 'RM',
              color: '#0066ff', // blue
              minPointLength: 100,
              data: [
                chartData.outcomeMetrics.loanProdY1,
                chartData.outcomeMetrics.depGrowthY1,
                chartData.outcomeMetrics.tmGrowthY1,
                {
                  y: chartData.outcomeMetrics.newClientsY1,
                  color: '#ff0000', // red
                },
              ],
            },
            {
              name: 'This Time Last Year',
              color: '#d9d9d9', // grey
              minPointLength: 1000,
              data: [
                chartData.outcomeMetrics.loanProdY2,
                chartData.outcomeMetrics.depGrowthY2,
                chartData.outcomeMetrics.tmGrowthY2,
                chartData.outcomeMetrics.newClientsY2,
              ],
            },
          ]
        : [
            {
              name: 'RM',
              color: '#0066ff', // blue
              minPointLength: 100,
              data: [
                chartData.behaviorMetrics.satisfactionY1,
                chartData.behaviorMetrics.clientCallsY1,
                {
                  y: chartData.behaviorMetrics.prospectCallsY1,
                  color: '#ff0000', // red
                },
                chartData.behaviorMetrics.strategiesY1,
              ],
            },
            {
              name: 'This Time Last Year',
              color: '#d9d9d9', // grey
              minPointLength: 1000,
              data: [
                chartData.behaviorMetrics.satisfactionY2,
                chartData.behaviorMetrics.clientCallsY2,
                chartData.behaviorMetrics.prospectCallsY2,
                chartData.behaviorMetrics.strategiesY2,
              ],
            },
          ],
  }

  return (
    <NbosPage elevation={2}>
      <HighchartsReact
        highcharts={Highcharts}
        chartName={chartName}
        options={options}
      />
    </NbosPage>
  )
}
