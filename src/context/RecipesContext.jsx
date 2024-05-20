import { useContext, createContext, useState } from "react";

const RecipeContext = createContext();

export function useRecipeContext() {
  return useContext(RecipeContext);
}

export function RecipeContextProvider({ children }) {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [search, setSearch] = useState();

  return (
    <RecipeContext.Provider
      value={{
        selectedRecipeId,
        setSelectedRecipeId,
        search,
        setSearch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
