import './Contact.css';

const Contact = () => {
    return (
        <div className = "contact">
            <h1>Contacto</h1>
             <p>Horario de atención: Lunes a Viernes: 9 - 19 hs. / Sábados: 9 - 13 hs.</p>
             <p>0376-4954-0913 / 0376-4951-0502</p>
             <p>contacto@misiotronica.com.ar</p>
             <p> Lavalle 2306, piso 9, oficina 906</p>
             <p>Deje aqui su consulta y nos contactaremos a la brevedad.</p>
               
            <form method="POST">
                <label>Nombre</label>
                <input type="text" name="nombre" />
                <label>Email</label>
                <input type="text" name="email" />
                <label>Mensaje</label>
                <textarea name="mensaje"></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
};

export default Contact;