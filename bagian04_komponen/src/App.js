//File: src/App.js
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './css/custom.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
