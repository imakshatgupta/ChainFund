 import React from "react";

import Home from "./Pages/Home";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => (
 <div>
<Router>
<Routes>
  <Route path="/" element=
  {<Home/>}
  />
  {/* <Route path="/payment" element={<Payment/>}/> */}
</Routes>
</Router>
 </div>
);

export default App;
