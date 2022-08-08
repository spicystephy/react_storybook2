// import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { outcomeMetrics } from 'stories/data/testData-outcomeMetrics'
import { behaviorMetrics } from 'stories/data/testData-behaviorMetrics'
import { users } from 'stories/data/testData-users'
import { dataAndCurrencyFormatter, dataFormatter } from 'utilities'

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
      text: `${users[0].first_name} ${users[0].last_name} vs. This Time Last Year`,
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
                outcomeMetrics[0].loan_prod_y1,
                outcomeMetrics[0].dep_growth_y1,
                outcomeMetrics[0].tm_growth_y1,
                {
                  y: outcomeMetrics[0].new_clients_y1,
                  color: `${
                    outcomeMetrics[0].new_clients_y1 > 2 ? '#0066ff' : 'red'
                  }`,
                },
              ],
            },
            {
              name: 'This Time Last Year',
              color: '#d9d9d9',
              minPointLength: 1000,
              data: [
                outcomeMetrics[0].loan_prod_y2,
                outcomeMetrics[0].dep_growth_y2,
                outcomeMetrics[0].tm_growth_y2,
                outcomeMetrics[0].new_clients_y2,
              ],
            },
          ]
        : [
            {
              name: 'RM',
              color: '#0066ff',
              minPointLength: 100,
              data: [
                behaviorMetrics[0].avg_overall_rm_sat_y1,
                behaviorMetrics[0].client_calls_y1,
                behaviorMetrics[0].prospect_calls_y1,
                behaviorMetrics[0].strat_uploaded_y1,
              ],
            },
            {
              name: 'This Time Last Year',
              color: '#d9d9d9',
              minPointLength: 1000,
              data: [
                behaviorMetrics[0].avg_overall_rm_sat_y2,
                behaviorMetrics[0].client_calls_y2,
                behaviorMetrics[0].prospect_calls_y2,
                behaviorMetrics[0].strat_uploaded_y2,
              ],
            },
          ],
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      chartName={chartName}
      options={options}
    />
  )
}
NbosHighchartsBar.prototypes = {
  chartName: PropTypes.oneOf(['outcome', 'behavior']),
}
NbosHighchartsBar.defaultProps = {
  chartName: 'outcome',
}

// const onSeriesChange = data => {
//   setChartData(prevState => {
// const sd = { ...prevState }
// const newCategories = xAxis.categories
// const newData = series.data
// sd.xAxis.categories = newCategories
// sd.series = newData
// return sd
// })
// }
// })
// const [chartData, setChartData] = useState(options)
