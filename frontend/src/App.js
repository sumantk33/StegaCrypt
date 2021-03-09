import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./pages/HomeScreen";
import EncryptionScreen from "./pages/EncryptionScreen";
import DecryptionScreen from "./pages/DecryptionScreen";
import EnCompleteScreen from "./pages/EnCompleteScreen";
import DeCompleteScreen from "./pages/DeCompleteScreen";

function App() {
  return (
    <Router>
      <NavBar />
      <hr></hr>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/encryption" component={EncryptionScreen} />
      <Route exact path="/en_complete" component={EnCompleteScreen} />
      <Route exact path="/decryption" component={DecryptionScreen} />
      <Route exact path="/de_complete" component={DeCompleteScreen} />
    </Router>
  );
}

export default App;
