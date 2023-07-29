import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Storage from './Components/Pages/Storage/Storage';
import NotFound from './Components/Pages/NotFound/NotFound';
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Common/Header';


const rutas = createBrowserRouter(
  [
    {path:'/', element: <Home />},
    {path:'/about', element: <About />},
    {path:'/contact', element: <Contact />},
    {path:'/storage', element: <Storage />},
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
        //Aca va el BANNER
    <RouterProvider router={rutas} />
    </div>
    </div>
  );
}

export default App;
