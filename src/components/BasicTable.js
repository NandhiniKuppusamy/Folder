import React, { useMemo } from "react";
import {
  useTable,
  useFilters, //filter out the specific value
  usePagination,
  useGlobalFilter //Filter used to search globally
} from "react-table";
import AllFilter from "./AllFilter";
import csvjson from "./csvjson.json"; //csv data
import COLUMNS from "./columns";
import "./table.css";
// import ColumnFilter from "./ColumnFilter";
const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []); //columns saved as array
  const data = useMemo(() => csvjson, []);
  //Table properties
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    setPageSize
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 } //to set rows one time scroll
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );
  const { globalFilter } = state;
  const { pageIndex, pageSize } = state; //Defined page per row

  return (
    <>
      <div style={{ backgroundColor: "lightsalmon" }}>
        <AllFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table style={{ marginLeft: "4.5cm" }} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*Pagination section starts */}
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[20, 40, 80, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </span>
          {/* next page button section starts*/}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
          {/* next page button section starts*/}
        </div>
      </div>
      {/*Pagination section ends */}
    </>
  );
};
export default BasicTable;
