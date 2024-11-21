import React, { Component } from "react";
import perfilIcono from "../img/perfil.png"; // Importa la imagen de perfil
import Pago from "./Pago";

class ItemMenu extends Component {
  render() {
    return (
      <div>
        {/* Menú superior */}
        <nav className="menu-superior">
          <div className="menu-logo">APP_NAME</div>
          <div className="menu-links">
            <a href="#home">Home</a>
            <a href="#about">Sobre Nosotros</a>
            <a href="#contact">Contáctenos</a>
            <a href="#messages">Mensajes</a>
            <img src={perfilIcono} alt="Perfil" className="menu-perfil-icono" />
          </div>
        </nav>

        {/* Contenido principal */}
        <div className="contenido-principal">
            <Pago />
        </div>

        {/* Pie de página */}
        <footer className="app-footer">
          <div className="footer-item">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F710%2F710078.png&f=1&nofb=1"
              alt="Alta Calidad"
            />
            <span>Alta Calidad</span>
          </div>
          <div className="footer-item">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fgarantia-png-6.png&f=1&nofb=1"
              alt="Garantía de Protección"
            />
            <span>Garantía de Protección</span>
          </div>
          <div className="footer-item">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230427%2Foriginal%2Fpngtree-shipping-line-icon-png-image_9117422.png&f=1&nofb=1"
              alt="Envío Gratis"
            />
            <span>Envío Gratis<br />Orden mayor a $100</span>
          </div>
          <div className="footer-item">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2618%2F2618521.png&f=1&nofb=1"
              alt="24 / 7 Soporte"
            />
            <span>24 / 7 Soporte</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default ItemMenu;
