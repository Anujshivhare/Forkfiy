import { useContext, createContext, useState } from "react";

const BookmarkContext = createContext();

export function useBookmarkContext() {
  return useContext(BookmarkContext);
}

export function BookmarkContextProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  function checkBookmark(recipe) {
    if (recipe && bookmarks.some((bookmark) => recipe.id === bookmark.id)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        setBookmarks,
        checkBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
