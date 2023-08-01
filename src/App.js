import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Shop from './Components/Pages/Shop/Shop';
import NotFound from './Components/Pages/NotFound/NotFound';
import SideBar from './Components/SideBar/SideBar';
import Banner from './Components/Common/Banner';
import Header from './Components/Header/Header';


const rutas = createBrowserRouter(
  [
    {path:'/', element: <Home />},
    {path:'/about', element: <About />},
    {path:'/contact', element: <Contact />},
    {path:'/shop', element: <Shop />},
    {path:'*', element: <NotFound />},
  ]
);

function App () {
  return (
    <div className="app-container">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="content">
        <Banner />
        <Header />
        <RouterProvider router={rutas} />
      </div> 
    </div>  
  );
}

export default App;
