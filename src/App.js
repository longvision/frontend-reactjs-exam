import React from "react";
import { Provider } from "react-redux";
import ShopScreen from "./pages/ShopScreen";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ShopScreen />
    </Provider>
  );
}

export default App;
