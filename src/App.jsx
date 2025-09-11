import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Error from "./components/pages/Error";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import QuickView from "./components/pages/QuickView";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/quickView" element={<QuickView />} />
         
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
