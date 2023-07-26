
const Contact = () => {
    return (
        <div className = "contact">
            <h1>Contacto</h1>
            <p>Horario de atención: Lunes a Viernes: 9 - 19 hs. / Sábados: 9 - 13 hs.
               011-4954-0913 / 011-4951-0502
               electro@federalstock.com.ar
               Lavalle 2306, piso 9, oficina 906</p>
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