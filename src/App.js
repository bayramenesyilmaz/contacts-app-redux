
import Contacts from "../src/pages/Contacts"
import ContactUpdate from "../src/pages/ContactUpdate"

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">

      <div className="container">
        <Routes>
          <Route index element={<Contacts />} />
          <Route path="/update/:id" element={<ContactUpdate />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
