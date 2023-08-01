import './NotFound.css';
import PaginaNoEncontrada from '../../../assets/PaginaNoEncontrada.jpg';

const NotFound = () => {
    return (
        <div className = "notFound">
            <img src={PaginaNoEncontrada} alt="Pagina no encontrada" />  
        </div>
    )
};

export default NotFound;