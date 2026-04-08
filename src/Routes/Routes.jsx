import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import Home from "../components/pages/Home/Home";
import Books from "../components/pages/Books/Books";
import NotFound from "../components/ErrorPage/NotFound";
import BookDetails from "../components/pages/AllBooks/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "bookDetails/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
    errorElement: <NotFound />,
  },
]);
