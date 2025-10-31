import React from "react";
import "./index.css";

const LuminousSignMaintenance = () => {
  const handleCTAClick = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu solicitud. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="LuminousSignMaintenance">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Mantenimiento de Letreros Luminosos</h1>
          <p className="hero-subtitle">
            Servicios profesionales de instalación, reparación y mantenimiento
            para mantener tu negocio brillante las 24 horas
          </p>
          <button className="cta-button" onClick={handleCTAClick}>Solicitar Cotización</button>
        </div>
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?w=800&q=80"
            alt="Letreros luminosos en la noche"
            className="hero-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card elevation-2">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
              alt="Instalación de letreros"
              className="service-image"
            />
            <h3 className="service-title">Instalación</h3>
            <p className="service-description">
              Instalación profesional de letreros luminosos con garantía de
              calidad y seguridad eléctrica certificada.
            </p>
          </div>

          <div className="service-card elevation-2">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80"
              alt="Mantenimiento preventivo"
              className="service-image"
            />
            <h3 className="service-title">Mantenimiento Preventivo</h3>
            <p className="service-description">
              Revisiones periódicas para asegurar el funcionamiento óptimo y
              prolongar la vida útil de tu letrero luminoso.
            </p>
          </div>

          <div className="service-card elevation-2">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
              alt="Reparación de letreros"
              className="service-image"
            />
            <h3 className="service-title">Reparación</h3>
            <p className="service-description">
              Servicio de reparación rápida para LEDs, transformadores y
              componentes eléctricos. Disponibilidad 24/7.
            </p>
          </div>

          <div className="service-card elevation-2">
            <img
              src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d1?w=400&q=80"
              alt="Modernización de letreros"
              className="service-image"
            />
            <h3 className="service-title">Modernización</h3>
            <p className="service-description">
              Actualizamos letreros antiguos a tecnología LED eficiente,
              reduciendo costos de energía hasta un 70%.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 className="section-title">Trabajos Realizados</h2>
        <div className="video-container">
          <video
            className="showcase-video"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Video mostrando ejemplos de letreros luminosos instalados en diferentes negocios"
            title="Ejemplos de trabajos realizados con letreros luminosos"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-neon-lights-in-the-city-at-night-7198/1080p.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">Galería de Proyectos</h2>
        <div className="gallery-grid">
          <div className="gallery-item elevation-1">
            <img
              src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=500&q=80"
              alt="Letrero luminoso restaurante"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Restaurante Centro</p>
            </div>
          </div>

          <div className="gallery-item elevation-1">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=80"
              alt="Letrero luminoso tienda"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Tienda Comercial</p>
            </div>
          </div>

          <div className="gallery-item elevation-1">
            <img
              src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&q=80"
              alt="Letrero luminoso hotel"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Hotel Boutique</p>
            </div>
          </div>

          <div className="gallery-item elevation-1">
            <img
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=500&q=80"
              alt="Letrero luminoso cafetería"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Cafetería Moderna</p>
            </div>
          </div>

          <div className="gallery-item elevation-1">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80"
              alt="Letrero luminoso bar"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Bar & Lounge</p>
            </div>
          </div>

          <div className="gallery-item elevation-1">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80"
              alt="Letrero luminoso oficina"
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Oficina Corporativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="section-title">¿Por Qué Elegirnos?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3 className="benefit-title">Respuesta Rápida</h3>
            <p className="benefit-description">
              Atención 24/7 para emergencias. Tiempo de respuesta menor a 2
              horas en la ciudad.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🔧</div>
            <h3 className="benefit-title">Técnicos Certificados</h3>
            <p className="benefit-description">
              Personal altamente capacitado con certificaciones internacionales
              en sistemas LED y eléctricos.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3 className="benefit-title">Mejor Precio</h3>
            <p className="benefit-description">
              Precios competitivos con garantía extendida. Planes de
              mantenimiento desde $49/mes.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">✓</div>
            <h3 className="benefit-title">Garantía Total</h3>
            <p className="benefit-description">
              Garantía de 2 años en instalaciones nuevas y 6 meses en
              reparaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Información de Contacto</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Teléfono</p>
                <p className="contact-value">+507 6000-0000</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">info@letreros-luminosos.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <p className="contact-label">Dirección</p>
                <p className="contact-value">
                  Ave. Principal, Ciudad de Panamá
                </p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <p className="contact-label">Horario</p>
                <p className="contact-value">Lun-Dom: 24/7 Emergencias</p>
                <p className="contact-value">Oficina: Lun-Vie 8AM-6PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-subtitle">Solicitar Cotización</h3>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Nombre completo"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="form-input"
                required
              />
              <select className="form-input" required>
                <option value="">Seleccione un servicio</option>
                <option value="instalacion">Instalación</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="reparacion">Reparación</option>
                <option value="modernizacion">Modernización</option>
              </select>
              <textarea
                placeholder="Describa su proyecto o necesidad"
                className="form-textarea"
                rows="4"
                required
              ></textarea>
              <button type="submit" className="form-button">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2024 Mantenimiento de Letreros Luminosos. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export { LuminousSignMaintenance };
