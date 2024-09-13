import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Product/store";
import Imggallery from "./Component/Imggallery";
import ProductContainer from "./Component/Productcontainer";
import Product from './Component/Product';
import Payloadproduct from './Component/Payloadproduct';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductContainer />
        <Payloadproduct/>
        <Product/>
        <Imggallery />
      </div>
    </Provider>
  );
}

export default App;
