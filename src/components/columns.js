import ColumnFilter from "./ColumnFilter";
const COLUMNS = [
  {
    Header: "Number", //Header of each column
    accessor: "number", //csv data means getting data from each column
    Filter: ColumnFilter //filter of each column
  },
  {
    Header: "mode3",
    accessor: "mod3",
    Filter: ColumnFilter
  },
  {
    Header: "mod4",
    accessor: "mod4",
    Filter: ColumnFilter
  },
  {
    Header: "mod5",
    accessor: "mod5",
    Filter: ColumnFilter
  },
  {
    Header: "mod6",
    accessor: "mod6",
    Filter: ColumnFilter
  }
];
export default COLUMNS;
