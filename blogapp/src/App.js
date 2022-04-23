import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Aboutus from './components/aboutus/aboutus';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Aboutus></Aboutus>
      <Footer></Footer>
    </div>
  );
}

export default App;
