import React from "react";
import icons from "../../assets/icons.svg";

/**
 * Component for pagination controls.
 * @param {Object} props - Component props.
 * @param {function} props.onPageChange - Function to handle page change.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @returns {JSX.Element} The JSX for the Pagination component.
 */
function Pagination({ onPageChange, currentPage, totalPages }) {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="btn--inline pagination__btn--prev"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg className="search__icon">
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
          <span>Page {currentPage - 1}</span>
        </button>
      )}

      {currentPage < totalPages && (
        <button
          className="btn--inline pagination__btn--next"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>Page {currentPage + 1}</span>
          <svg className="search__icon">
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </button>
      )}
    </div>
  );
}

export default Pagination;
