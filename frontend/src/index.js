import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";




// import PrivateRoute from "./components/Utils/PrivateRoute";
// import AdminRoute from "./components/Utils/AdminRoute";

import PrivateRoute from "./Components/Utils/PrivateRoute";
import AdminRoute from "./Components/Utils/AdminRoute";
import HomeScreen from "./Screens/Public/HomeScreen/HomeScreen";
import NotFoundScreen from "./Screens/Public/NotFoundScreen/NotFoundScreen.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/*" element={<NotFoundScreen />} />

  


      {/* Route privée */}
      <Route path="" element={<PrivateRoute />}>
      
      </Route>
      {/* Route privée */}
      <Route path="" element={<AdminRoute />}>
      
      </Route>

    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
