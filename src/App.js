import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Store from './Components/Pages/Store/Store';
import NotFound from './Components/Pages/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';

const rutas = createBrowserRouter(
  [
    {path:'/', element: <Home />},
    {path:'/about', element: <About />},
    {path:'/contact', element: <Contact />},
    {path:'/store', element: <Store />},
    {path:'*', element: <NotFound />},
  ]
);

function App () {
  return (
    <div>
    <NavBar />
    <RouterProvider router={rutas} />
    </div>
  );
}

export default App;
