import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Error from "./pages/Error";
import { RecipeContextProvider } from "./context/RecipesContext";
import { BookmarkContextProvider } from "./context/BookmarkContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/:id",
        element: <Recipe />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipeContextProvider>
        <BookmarkContextProvider>
          <RouterProvider router={router} />;
        </BookmarkContextProvider>
      </RecipeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
