import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Product/store";
import Imggallery from "./Component/Imggallery";
import Product from "./Component/Product";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Product />
        <Imggallery />
      </div>
    </Provider>
  );
}

export default App;
