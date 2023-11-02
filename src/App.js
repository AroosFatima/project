import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
// import Redux from "./Redux";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import ShopCart from "./pages/ShopCart.js";

import Banner from "./components/Banner";
import Fav from "./pages/Fav.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/baner",
    element: <Banner />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <ShopCart />,
  },
  {
    path: "/fav",
    element: <Fav />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  );
}

export default App;
{
  /* <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter> */
}
