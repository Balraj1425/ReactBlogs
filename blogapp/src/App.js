import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Aboutus from './components/aboutus/aboutus';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from './components/contactus/contactus';
import Blogs from './components/blogs/blog';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
          <Route path='/contactus' element={<Contactus></Contactus>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
