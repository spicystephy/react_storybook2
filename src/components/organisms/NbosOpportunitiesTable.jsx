import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css' // Optional theme CSS
import { NbosPage } from 'components/molecules/NbosPage'
// import { NbosButton } from 'components/atoms/NbosButton'
import { currencyFormatter, dateFormatter } from 'utilities'

export const NbosOpportunitiesTable = ({ opportunitiesDetail }) => {
  const gridRef = useRef() // Optional - for accessing Grid's API

  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Relationship',
      field: 'client_name',
    },
    {
      headerName: 'Product Type',
      field: 'product_type',
    },
    {
      headerName: 'Sales Stage',
      field: 'sales_stage',
    },
    {
      headerName: 'Revenue',
      field: 'revenue',
      valueFormatter: currencyFormatter,
      sort: 'desc',
    },
    {
      headerName: 'Date Closed',
      field: 'date_closed',
      valueFormatter: dateFormatter,
    },
  ])

  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1,
    resizable: true,
  }))
  useEffect(() => {
    const top5 = [...opportunitiesDetail.oppDetail]
    setRowData(top5.sort((a, b) => b.revenue - a.revenue).slice(0, 5))
  }, [opportunitiesDetail.oppDetail])

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
        <ButtonGroup variant="outlined" aria-label="outlined  button group">
          <Button label="Top 5 Opportunities" onClick={resetTop5}>
            Top 5 Opportunities
          </Button>
          <Button label="View Full Pipeline" onClick={viewFullPipeline}>
            View Full Pipeline
          </Button>
        </ButtonGroup>
        {/* <NbosButton
          size="medium"
          label="Top 5 Opportunities"
          onClick={resetTop5}
        >
          {}
        </NbosButton>
        <NbosButton
          size="medium"
          label="View Full Pipeline"
          onClick={viewFullPipeline}
        >
          {}
        </NbosButton> */}
        <div className="ag-theme-material" style={{ width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            domLayout="autoHeight"
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple"
          />
        </div>
      </div>
    </NbosPage>
  )
}

export default NbosOpportunitiesTable
