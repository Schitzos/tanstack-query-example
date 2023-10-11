import React from 'react';
import { Pagination, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from '@mantine/core';
import styles from './style.module.scss';

// Define the interface for the props
interface TableViewProps {
  config: Array<{
    key: string;
    heading: string;
  }>;
  data: Array<Record<string, any>>;
}

// Define the TableView component
export default function TableView({ config, data }: TableViewProps) {
  const rows = data?.map((val, i) => {
    return (
      <TableTr key={i}>
        {config.map((column, idx) => {
          return (
            <TableTd key={idx}>{val[column.key]}</TableTd>
          );
        })}
      </TableTr>
    );
  });

  const heading = config.map((val) => (
    <TableTh key={val.key}>{val.heading}</TableTh>
  ));

  return (
    <div className={styles.tableContainer}>
      <Table striped highlightOnHover withRowBorders={false} verticalSpacing="sm">
        <TableThead>
          <TableTr className={styles.tableTr}>
            {heading}
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
      <Pagination className={styles.pagination} total={20} boundaries={1} defaultValue={10} />
    </div>
  );
}
