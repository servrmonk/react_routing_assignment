import { Route, Routes } from "react-router-dom"; //and route b actually b a component

import "./App.css";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      {/* <h2>Let's get started</h2> */}
    </div>
  );
}

export default App;

//  our-domain.com/welcome = welcome components
// our-domain.com/products = products component
