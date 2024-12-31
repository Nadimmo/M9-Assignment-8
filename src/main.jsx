import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedsBooks/ListedBooks';
import BookDetails from './components/BookDetails/BookDetails';
import ReadBooks from './components/ListedsBooks/ReadBooks';
import WishlistBooks from './components/ListedsBooks/WishlistBooks';
import PageReads from './components/PageRead/PageReads';
import Artical from './components/Artical/Artical';
import More from './components/More/More';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/listedBook",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            loader: ()=> fetch('../BooksData.json'),
            element: <ReadBooks></ReadBooks>
          },
          {
            path: "wishlist",
            loader: ()=> fetch('../BooksData.json'),
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: "/readPage",
        loader: ()=> fetch('../BooksData.json'),
        element: <PageReads></PageReads>
      },
      {
        path: "/books/:bookId",
        loader: ()=> fetch('../BooksData.json'),
        element:<BookDetails></BookDetails>
      },
      {
        path: "/article",
        element :<Artical></Artical>
      },
      {
        path:"/more",
        element: <More></More>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
