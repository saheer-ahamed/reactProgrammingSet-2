import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.min.css"; // Optional theme

export default function Grid({showRowData}) {
  const [columnDefs, setColumnDefs] = useState([
    { field: "userId" },
    { field: "id" },
    { field: "title" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  return (
    <>
      <div
        className="ag-theme-alpine-dark"
        style={{ height: "100vh" }}
      >
        <AgGridReact
          rowData={showRowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          pagination={true}
          paginationPageSize={20}
        />
      </div>
    </>
  );
}
