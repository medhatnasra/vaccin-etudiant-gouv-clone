import "./All.css";

import Header from "./components/Header";

import { Switch, Route, useLocation } from "react-router-dom";
import Welcome from "./components/Welcome";
import Register from "./components/Register";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
