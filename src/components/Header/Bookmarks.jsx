import React from "react";
import icons from "../../assets/icons.svg";
import { useBookmarkContext } from "../../context/BookmarkContext";
import Preview from "../UI/Preview.jsx";

function Bookmarks() {
  const { bookmarks } = useBookmarkContext();

  return (
    <>
      <button className="nav__btn nav__btn--bookmarks">
        <svg className="nav__icon">
          <use href={`${icons}#icon-bookmark`}></use>
        </svg>
        <span>Bookmarks</span>
      </button>
      <div className="bookmarks">
        <ul className="bookmarks__list">
          {bookmarks.length === 0 ? (
            <div className="message">
              <div>
                <svg>
                  <use href={`${icons}#icon-alert-triangle`}></use>
                </svg>
              </div>
              <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
            </div>
          ) : (
            bookmarks.map((bookmark) => (
              <Preview key={bookmark.id} preview={bookmark} />
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Bookmarks;
