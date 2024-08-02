import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Services from './Component/Services';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
