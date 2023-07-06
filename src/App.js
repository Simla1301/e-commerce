
import Jewellerylist from "./components/jewellerylist";
import Watchlist from "./components/watchlist";
import NavBar from "./components/navBar";
// import { products } from "./data/products";
import Linklist from "./components/linklist";
import Ringslist from "./components/ringslist";

function App() {

  return (
    <div className="App">
      <h1 className="text-center mt-5 mb-5">Amazon Best Sale</h1>
      {/* <products/> */}
      {/* <Linklist product={products}/> */}
      <NavBar/>
      <Jewellerylist/>
      <Watchlist/>
      <Ringslist/>
    </div>
  );
}

export default App;
