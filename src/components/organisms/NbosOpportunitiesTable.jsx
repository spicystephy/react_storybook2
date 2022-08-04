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

  const [rowData, setRowData] = useState()

  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Relationship', field: 'client_name' },
    { headerName: 'Product Type', field: 'product_type' },
    { headerName: 'Sales Stage', field: 'sales_stage' },
    {
      headerName: 'Revenue',
      field: 'revenue',
      valueFormatter: currencyFormatter,
      sort: 'asc',
    },
    {
      headerName: 'Date Closed',
      field: 'date_closed',
      valueFormatter: dateFormatter,
    },
  ])

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }))

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

  return (
    <NbosPage elevation={2}>
      <div>
        {/* <button onClick={buttonListener}>Top 5 Opportunities</button> */}
        <NbosButton size="medium" label="Top 5 Opportunities">
          {}
        </NbosButton>
        <div className="ag-theme-material" style={{ width: '100%' }}>
          <AgGridReact
            domLayout="autoHeight" // will fit all rows if not too many of them
            rowData={opportunitiesDetail}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple" // Options - allows click selection of rows
          />
        </div>
        <NbosButton size="medium" label="View Full Pipeline">
          {}
        </NbosButton>
      </div>
    </NbosPage>
  )
}

export default NbosOpportunitiesTable
