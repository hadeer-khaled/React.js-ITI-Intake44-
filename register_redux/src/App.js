import Form from "./Pages/Form";
import router from "./router";
import { RouterProvider } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
