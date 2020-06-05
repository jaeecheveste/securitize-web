import React from "react";

interface ColumnsSchema {
  key: string;
  title: string;
}

interface ActionSchema {
  key: string;
  title: string;
  icon: string;
}

interface TableSchema {
  columns: Array<ColumnsSchema>;
  action: ActionSchema;
  onClickAction: (i: any) => any;
}

const TableComponent = ({ onClickAction, columns, action }: TableSchema) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c: any) => (
            <th key={c.key}>{c.title}</th>
          ))}
          {action && <th>{action.title}</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bitcoin</td>
          <td>600</td>
          <td>Circulating Supply</td>
          {action && (
            <td>
              <button onClick={() => onClickAction(1)}>ICON</button>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
