import DynamicTable from "@atlaskit/dynamic-table";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";

import "./shopCoinTable.scss";
export interface ICoinTableColumn {
  title: string;
  dataField: string;
  sortable?: boolean;
  shouldTruncate?: boolean;
  width?: number;
  render?: (dataItem: coinTable["data"][0]) => JSX.Element;
}

export interface ICoinTablePagination {
  rowsPerPage: number;
  defaultPage?: number;
}

export interface coinTable<T = any> {
  data: T[];
  columns: ICoinTableColumn[];
  pagination?: ICoinTablePagination;
}

const Styled: any = styled.div`
  button[page="${(props: any) => props.currentPage}"] {
    background-color: #fbc300 !important;
  }
  button {
    span {
      color: #000000;
    }
  }
`;

export default function ShopCoinTable(props: coinTable) {
  const [dataTable, setDataTable] = useState(props.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  useEffect(() => {
    setDataTable(props.data);
  }, [props.data]);

  useEffect(() => {
    if (!!props.pagination) setItemPerPage(props.pagination.rowsPerPage);
  }, [props.pagination?.rowsPerPage]);

  const changeItemPerPage = (e: BaseSyntheticEvent) => {
    setItemPerPage(e.target.value);
  };

  const createHead = () => ({
    cells: props.columns.map((i) => ({
      key: i.dataField,
      content: i.title,
      isSortable: !!i.sortable ? i.sortable : false,
      width: i.width || undefined,
    })),
  });

  const rows = dataTable.map((item, index) => ({
    key: `row-${index}`,
    cells: props.columns.map((col, ind) => ({
      key: `col-${ind}`,
      content: !col.render ? item[col.dataField] : col.render(item),
    })),
  }));

  const emptyRows = [
    {
      key: "row-empty",
      cells: [
        { key: "col-empty", content: <div style={{ minHeight: 200 }}></div> },
      ],
    },
  ];

  return (
    <div className="shopCoinTable-container">
      <Styled currentPage={currentPage}>
        <DynamicTable
          head={createHead()}
          rows={rows.length > 0 ? rows : emptyRows}
          rowsPerPage={itemPerPage || 10}
          defaultPage={props.pagination?.defaultPage || 1}
          page={currentPage}
          loadingSpinnerSize="large"
          onSort={(dataItem, e) => {
            let newData = [...dataTable];
            newData = newData.sort((a, b) => {
              if (dataItem.sortOrder === "ASC") {
                if (a[dataItem.key] === b[dataItem.key]) return 0;
                else return -1;
              } else {
                if (a[dataItem.key] === b[dataItem.key]) return 0;
                else return -1;
              }
            });

            setDataTable(newData);
          }}
          onSetPage={(e) => setCurrentPage(e)}
        />
        <div className="table-footer-tool">
          <div className="item-per-page">
            <select name="cars" id="cars" onChange={changeItemPerPage}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </div>{" "}
          items per page |{" "}
          {currentPage * (props.pagination?.rowsPerPage || 10) -
            (props.pagination?.rowsPerPage || 10) +
            1}{" "}
          - {currentPage * (props.pagination?.rowsPerPage || 10)} of{" "}
          {props.data.length}
        </div>
      </Styled>
    </div>
  );
}
