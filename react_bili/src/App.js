import React from 'react';
import "assets/style/reset.css"
import Tab from './pages/Tab';
import { Provider } from "react-redux"
import store from "./store/index"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tab />
      </div>
    </Provider>

  );
}

export default App;
