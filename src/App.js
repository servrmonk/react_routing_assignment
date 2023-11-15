import { Route, Routes } from "react-router-dom"; //and route b actually b a component

import "./App.css";


import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";



function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products"  element={<Products />} />
          {/* <Route path="/welcome/new-user" element={<Welcome/>} /> */}

          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </main>
      {/* <h2>Let's get started</h2> */}
    </div>
  );
}

export default App;
