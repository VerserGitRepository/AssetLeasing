import React, { Component } from "react";
import _ from "lodash";
//not working properly, created for the purpose of showing page numbers, delete this page before the deployment.
const Pagination = props => {
  const { itemsCount, pageSize } = props;

  const pageCount = itemsCount / pageSize;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
