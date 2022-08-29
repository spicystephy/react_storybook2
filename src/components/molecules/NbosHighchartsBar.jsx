// import React,{ useState, useEffect } from 'react'
// import { PropTypes } from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { NbosPage } from './NbosPage'
// import { dataAndCurrencyFormatter, dataFormatter } from 'utilities'

export const NbosHighchartsBar = ({ chartName, chartData, users }) => {
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
            if (chartName === 'outcome') {
              if (this.y >= 1000000) {
                const value = (this.y / 1000000).toFixed(2)

                return `$${value} MM`
              } else if (this.y > 1000 && this.y < 1000000) {
                const value = (this.y / 1000).toFixed(2)
                return `$${value} K`
              } else return this.y
            } else {
              if (this.y >= 1000000) {
                const value = (this.y / 1000000).toFixed(2)

                return value
              } else if (this.y > 1000 && this.y < 1000000) {
                const value = (this.y / 1000).toFixed(2)
                return value
              } else return this.y
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
              color: '#0066ff',
              minPointLength: 100,
              data: [
                chartData.outcomeMetrics.loanProdY1,
                chartData.outcomeMetrics.depGrowthY1,
                chartData.outcomeMetrics.tmGrowthY1,
                {
                  y: chartData.outcomeMetrics.newClientsY1,
                  color: `${
                    chartData.outcomeMetrics.newClientsY1 > 2
                      ? '#0066ff'
                      : 'red'
                  }`,
                },
              ],
            },
            {
              name: 'This Time Last Year',
              color: '#d9d9d9',
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
              color: '#0066ff',
              minPointLength: 100,
              data: [
                chartData.behaviorMetrics.satisfactionY1,
                chartData.behaviorMetrics.clientCallsY1,
                chartData.behaviorMetrics.prospectCallsY1,
                chartData.behaviorMetrics.strategiesY1,
              ],
            },
            {
              name: 'This Time Last Year',
              color: '#d9d9d9',
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

  // const [metricsData, setMetricsData] = useState(options)
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
// NbosHighchartsBar.prototypes = {
//   chartName: PropTypes.oneOf(['outcome', 'behavior']),
// }
// NbosHighchartsBar.defaultProps = {
//   chartName: 'outcome',
// }

// const onSeriesChange = data => {
//   setChartData(prevState => {
//     const sd = { ...prevState }
//     const newCategories = xAxis.categories
//     const newData = series.data
//     sd.xAxis.categories = newCategories
//     sd.series = newData
//     return sd
//   })
// }
