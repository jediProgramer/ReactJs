//File: src/App.js
import Header from './components/Header';
import Home from './components/Home';
import Tentang from './components/Tentang';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import Produk from './components/Produk';
import DetailProduk from './components/DetailProduk';
import './css/custom.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
       <Header />
      <Router>
          <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route exact path="/tentang" ><Tentang /></Route>
            <Route exact path="/kontak" ><Kontak /></Route>
            <Route exact path="/produk" ><Produk /></Route>
            <Route exact path="/detail/:id" ><DetailProduk /></Route>
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
