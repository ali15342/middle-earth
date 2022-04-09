import '../src/css/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/page/About';
import Home from './components/page/Home';
import Characters from './components/page/Characters/Characters';
import MapPage from './components/page/MapPage';
import Error404 from './components/page/Error404';
import Login from './components/page/Login';
import Register from './components/page/Registration';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/characters" element={<Characters/>}></Route>
      <Route path="/map" element={<MapPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>
</Router>

  );
}

export default App;
