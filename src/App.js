import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Product/store";
import Imggallery from "./Component/Imggallery";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Imggallery></Imggallery>
      </div>
    </Provider>
  );
}

export default App;
