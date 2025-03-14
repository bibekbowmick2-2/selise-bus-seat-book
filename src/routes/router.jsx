

//import ErrorPage from "../components/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import AdminPanel from "../components/AdminPanel";
import BookSeat from "../components/BookSeat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },


      {
        path: "/admin",
        element: <AdminPanel />,
      },

      {
        path: "/bookseat/:seat_no/:busNumber",
        element: <BookSeat />,
        
      },



    //   {
    //     path: "/register",
    //     element: <Register/>,
    //   },

      

    //   {
    //     path: "/session-details/:session_title",
    //     element: <PrivateeRoute><ProductDetailsPage/></PrivateeRoute>,
    //     loader: () => fetch(`${import.meta.env.VITE_API_URL}/sessions`),
    //   }

      

    ],
    
  },



  

 


//   {
//     path: "*",
//     element: <ErrorPage />,
//   },

 

 
    
]);

export default router;
