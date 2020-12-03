import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Create from "./components/Create";
import Questions from "./components/Questions";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navbar />
      <h1>Grok Together We Go Far</h1>
      <br />
      <Route path="/" exact component={Cards} />
      <Route path="/create" component={Create} />
      <Route path="/questions" component={Questions} />
    </Router>
  );
}

export default App;
