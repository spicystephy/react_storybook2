// import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import { dataFormatter } from 'utilities'

export const NbosHighchartsBar = ({
  chartName,
  outcomeMetrics,
  behaviorMetrics,
  users,
}) => {
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
      // text: 'Bone Maides vs. This Time Last Year',
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
            // if (chartName === 'outcome') {
            if (this.y >= 1000000) {
              const value = this.y / 1000000
              return `$${value}M`
            } else if (this.y > 1000 && this.y < 1000000) {
              const value = this.y / 1000
              return `$${value}K`
            } else return this.y
          },
        },
      },
      // },
    },
    series: [
      {
        name: 'RM',
        color: '#0066ff',
        data:
          chartName === 'outcome'
            ? [
                outcomeMetrics.loanProdY1,
                outcomeMetrics.depGrowthY1,
                outcomeMetrics.tmGrowthY1,
                {
                  y: outcomeMetrics.newClientsY1,
                  color: `${
                    outcomeMetrics.newClientsY1 > 2 ? '#0066ff' : 'red'
                  }`,
                },
              ]
            : [
                behaviorMetrics.satisfactionY1,
                behaviorMetrics.clientCallsY1,
                {
                  y: behaviorMetrics.prospectCallsY1,
                  color: `${
                    behaviorMetrics.prospectCallsY1 > 5 ? '#0066ff' : '#red'
                  }`,
                },
                behaviorMetrics.strategiesY1,
              ],
      },
      {
        name: 'This Time Last Year',
        color: '#bfbfbf',
        data:
          chartName === 'outcome'
            ? [
                outcomeMetrics.loanProdY2,
                outcomeMetrics.DepGrowthY2,
                outcomeMetrics.TmGrowthY2,
                outcomeMetrics.newClientsY2,
              ]
            : [
                behaviorMetrics.satisfactionY2,
                behaviorMetrics.clientCallsY2,
                behaviorMetrics.prospectCallsY2,
                behaviorMetrics.strategiesY2,
              ],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
