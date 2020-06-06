import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./TableComponent.scss";
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
  action?: ActionSchema;
  list: Array<any>;
  onClickAction: (i: any) => any;
}

const TableComponent = ({
  onClickAction,
  columns,
  action,
  list
}: TableSchema) => {
  //Method repeated , make it generic

  const getItemClasses = (liked: any) => {
    return liked ? "heart-icon-btn--active" : "heart-icon-btn--inactive";
  };

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
        {list.length > 0 &&
          list.map(item => (
            <tr key={item.key}>
              {columns.map((c: any) => (
                <td key={c.key}>{item[c.key] || ""}</td>
              ))}
              {action && (
                <td className={`heart-icon-btn ${getItemClasses(item.liked)}`}>
                  <FontAwesomeIcon
                    onClick={() => onClickAction(item)}
                    icon={faHeart}
                  />
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
