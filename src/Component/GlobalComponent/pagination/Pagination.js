import React, { useState } from "react";
// Style
import "./Pagination.css";

// Function Take
function Pagination(props, { handlePagination }) {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const changeCurrPage = (id) => {
    setCurrentPage(id);
    props.handlePagination(id); // send currentPage to parent
  };

  // Function for Next Btn
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      props.handlePagination(currentPage + 1);
    }
  };
  // Function for Prev Btn
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      props.handlePagination(currentPage - 1);
    }
  };

  const npage = Math.ceil(props.dataLength / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <nav className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={prePage}>
            Prev
          </button>
        </li>

        {numbers?.map((n, id) => (
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={id}
          >
            <button className="page-link" onClick={() => changeCurrPage(n)}>
              {n}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === numbers.length ? "disabled" : ""
          }`}
        >
          <button className="page-link nextBtn" onClick={nextPage}>
            Next
          </button>
        </li>
      </nav>
    </>
  );
}

export default Pagination;
