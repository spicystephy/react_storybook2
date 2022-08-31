// ORIGINAL
// formatter: function () {
//   if (chartName === 'outcome' || chartName === 'behavior') {
//     if (this.y >= 1000000) {
//       const value = (this.y / 1000000).toFixed(2)
//       return `$${value} MM`
//     } else if (this.y > 1000 && this.y < 1000000) {
//       const value = (this.y / 1000).toFixed(2)
//       return `$${value} K`
//     } else return this.y * 1000
//   } else {
//     if (this.y >= 1000000) {
//       const value = (this.y / 1000000).toFixed(2)
//       return value
//     } else if (this.y > 1000 && this.y < 1000000) {
//       const value = (this.y / 1000).toFixed(2)
//       return value
//     } else return this.y
//   }
// },

// formatter: function () {

//       if (this.y >= 1000000) {
//         const value = (this.y / 1000000).toFixed(2)
//         return `$${value} MM`
//       } else if (this.y > 1000 && this.y < 1000000) {
//         const value = (this.y / 1000).toFixed(2)
//         return `$${value} K`
//       } else return this.y * 1000

//     }

// {
//     name: 'RM',
//     color: chartData.behaviorMetrics > 5 ? '#0066ff' :'#ff0000'
//     data: [
//       chartData.behaviorMetrics.satisfactionY1,
//       chartData.behaviorMetrics.clientCallsY1,
//       chartData.behaviorMetrics.prospectCallsY1,
//       chartData.behaviorMetrics.strategiesY1,
//     ],
//   },

// ORIGINAL
// {
//     name: 'RM',
//     color: '#0066ff', // blue
//     // minPointLength: 100,
//     data: [
//       chartData.outcomeMetrics.loanProdY1,
//       chartData.outcomeMetrics.depGrowthY1,
//       chartData.outcomeMetrics.tmGrowthY1,
//       {
//         y: chartData.outcomeMetrics.newClientsY1,
//         color: `${
//           chartData.outcomeMetrics.newClientsY1 > 2
//             ? '#0066ff' // blue
//             : '#ff0000' // red
//         }`,
//       },
//     ],
//   },

// ORIGINAL
//   {
//     name: 'RM',
//     color: '#0066ff', // blue
//     // minPointLength: 100,
//     data: [
//       chartData.behaviorMetrics.satisfactionY1,
//       chartData.behaviorMetrics.clientCallsY1,
//       {
//         y: chartData.behaviorMetrics.prospectCallsY1,
//         color: `${
//           chartData.outcomeMetrics.prospectCallsY1 > 5
//             ? '#0066ff' // blue
//             : '#ff0000' // red
//         }`,
//       },

//       chartData.behaviorMetrics.strategiesY1,
//     ],
//   },

// ORIGINAL
// if (this.y >= 1000000) {
//     const value = (this.y / 1000000).toFixed(2)
//     return `$${value} MM`
//   } else if (this.y > 1000 && this.y < 1000000) {
//     const value = (this.y / 1000).toFixed(2)
//     return `$${value} K`
//   } else return this.y // (this.y * 1000).toString().replace('000', '')
