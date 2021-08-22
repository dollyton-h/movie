import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Detailpage from "./components/detailpage/Detailpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:id" exact component={Detailpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
