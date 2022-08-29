import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css' // Optional theme CSS
import { NbosPage } from 'components/molecules/NbosPage'
import { NbosButton } from 'components/atoms/NbosButton'
import { currencyFormatter, dateFormatter } from 'utilities'

export const NbosOpportunitiesTable = ({ opportunitiesDetail }) => {
  const gridRef = useRef() // Optional - for accessing Grid's API

  // const [rowData, setRowData] = useState(opportunitiesDetail.oppDetail)
  const [rowData, setRowData] = useState([])

  // const formatCurrency = params => {
  //   return currencyFormatter(params.value.toString())
  // }
  // const newCurrency = value => {
  //   currencyFormatter(value).toString()
  // }

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Relationship',
      // field: opportunitiesDetail.oppDetail.client_name,
      field: 'client_name',
    },
    {
      headerName: 'Product Type',
      // field: opportunitiesDetail.oppDetail.product_type,
      field: 'product_type',
    },
    {
      headerName: 'Sales Stage',
      // field: opportunitiesDetail.oppDetail.sales_stage,
      field: 'sales_stage',
    },
    {
      headerName: 'Revenue',
      // field: opportunitiesDetail.oppDetail.revenue,
      field: 'revenue',
      valueFormatter: currencyFormatter,
      sort: 'desc',
    },
    {
      headerName: 'Date Closed',
      // field: opportunitiesDetail.oppDetail.date_closed,
      field: 'date_closed',
      valueFormatter: dateFormatter,
    },
  ])

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }))
  useEffect(() => {
    const top5 = [...opportunitiesDetail.oppDetail]
    setRowData(top5.sort((a, b) => b.revenue - a.revenue).slice(0, 5))
  }, [opportunitiesDetail.oppDetail])

  // Example of consuming Grid Event
  //   const cellClickedListener = useCallback(event => {
  //     console.log('cellClicked', event)
  //   }, [])

  // Example load data from sever
  //   useEffect(() => {
  //     fetch('https://www.ag-grid.com/example-assets/row-data.json')
  //       .then(result => result.json())
  //       .then(rowData => setRowData(rowData))
  //   }, [])
  const viewFullPipeline = () => {
    setRowData(opportunitiesDetail.oppDetail)
  }
  const resetTop5 = () => {
    const top5 = [...opportunitiesDetail.oppDetail]
    setRowData(top5.sort((a, b) => b.revenue - a.revenue).slice(0, 5))
  }
  return (
    <NbosPage elevation={2}>
      <div>
        {/* <button onClick={buttonListener}>Top 5 Opportunities</button> */}
        <NbosButton
          size="medium"
          label="Top 5 Opportunities"
          onClick={resetTop5}
        >
          {}
        </NbosButton>
        <div className="ag-theme-material" style={{ width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            domLayout="autoHeight" // will fit all rows if not too many of them
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple" // Options - allows click selection of rows
          />
        </div>
        <NbosButton
          size="medium"
          label="View Full Pipeline"
          onClick={viewFullPipeline}
        >
          {}
        </NbosButton>
      </div>
    </NbosPage>
  )
}

export default NbosOpportunitiesTable
