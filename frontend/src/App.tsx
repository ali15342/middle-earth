import '../src/css/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/page/About';
import Home from './components/page/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
</Router>
  );
}

export default App;
