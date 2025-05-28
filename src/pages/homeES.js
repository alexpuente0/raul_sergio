import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import testimonials from "./data/testimoniosES";
import services from "./data/servicios";
import Modal from "../components/Modal";

const HomeES = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const handleServiceClick = (serviceId) => {
    const index = services.findIndex((s) => s.id === serviceId);
    if (index !== -1) {
      setCurrentServiceIndex(index);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      console.error(`Service with ID ${serviceId} not found`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleNextService = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevService = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <header class="hero">
        <div class="hero-content">
          <h1>Raul Sergio</h1>
          <p class="tagline">
            Maestro Peluquero. Guardián de Técnicas Ancestrales.
          </p>
          <p class="hero-subtext">
            Servicios exclusivos disponibles globalmente solo por invitación
          </p>
        </div>
      </header>

      <main>
        <section class="about">
          <h2>La Leyenda de Raul Sergio</h2>
          <p>
            Durante décadas, Raul Sergio ha permanecido como un enigma. Aunque
            su atelier físico sigue siendo un secreto celosamente guardado
            (visto por última vez en el vibrante pulso de Monterrey), el toque
            transformador de sus legendarias técnicas puede ser solicitado por
            individuos exigentes en todo el mundo.
          </p>
          <p>
            Se dice que aprendió su arte no en academias, sino en las
            silenciosas salas de monasterios olvidados y en las cumbres barridas
            por el viento, donde los secretos del cabello se transmitieron de
            generación en generación. Algunos afirman que puede leer los mismos
            cabellos, entendiendo sus deseos más profundos. Otros hablan de
            elixires elaborados bajo cielos de luna y técnicas perdidas en el
            tiempo, redescubiertas en sus manos expertas.
          </p>
          <p>
            Conseguir una cita con Raul Sergio no es simplemente hacerse un
            corte de cabello; es embarcarse en una peregrinación transformadora
            para tu cabello. Ten cuidado, su tiempo es limitado, su mirada
            discreta. Solo aquellos verdaderamente preparados para el cambio
            encontrarán el camino a su puerta.
          </p>
        </section>

        <section class="clients">
          <h2>Clientes Selectos</h2>
          <p>Raul Sergio ha transformado el estilo de:</p>
          <div class="client-grid">
            <div class="client-item">Catherine Middleton</div>
            <div class="client-item">Gwyneth Paltrow</div>
            <div class="client-item">Rihanna</div>
            <div class="client-item">Tilda Swinton</div>
            <div class="client-item">Julianne Moore</div>
            <div class="client-item">Dwayne Johnson</div>
            <div class="client-item">Jennifer Lawrence</div>
            <div class="client-item">Emma Stone</div>
            <div class="client-item">David Tennant</div>
            <div class="client-item">Katherine Heigl</div>
            <div class="client-item">Jenna Elfman</div>
            <div class="client-item">Jessica Chastain</div>
            <div class="client-item">Natalie Portman</div>
            <div class="client-item">Kate Winslet</div>
            <div class="client-item">Julianne Moore</div>
            <div class="client-item">Zoë Kravitz</div>
            <div class="client-item">Stanley Tucci</div>
            <div class="client-item">Matt Smith</div>
            <div class="client-item">Jessica Biel</div>
            <div class="client-item">Maya Rudolph</div>
          </div>
        </section>

        <section class="services">
          <h2>Servicios Exclusivos</h2>
          <div class="service-grid">
            <div
              class="service-card"
              data-service="corte_viento"
              onClick={() => handleServiceClick("whispering_wind")}
            >
              <h3>El Corte de Viento Susurrante</h3>
              <img
                src={require("../assets/ww33.png")}
                alt="El Corte de Viento Susurrante"
                class="service-image"
              />
            </div>

            <div
              class="service-card"
              data-service="brillo_lunar"
              onClick={() => handleServiceClick("lunar_lustre_treatment")}
            >
              <h3>El Tratamiento de Brillo Lunar</h3>
              <img
                src={require("../assets/ll02.png")}
                alt="El Tratamiento de Brillo Lunar"
                class="service-image"
              />
            </div>

            <div
              class="service-card"
              data-service="piedra_solar"
              onClick={() => handleServiceClick("sunstone_sculpt")}
            >
              <h3>El Esculpido de Piedra Solar</h3>
              <img
                src={require("../assets/ss03.png")}
                alt="El Esculpido de Piedra Solar"
                class="service-image"
              />
            </div>

            <div
              class="service-card"
              data-service="seda_sombria"
              onClick={() => handleServiceClick("smoothing")}
            >
              <h3>El Suavizado de Seda Sombria</h3>
              <img
                src={require("../assets/ss04.png")}
                alt="El Suavizado de Seda Sombria"
                class="service-image"
              />
            </div>

            <div
              class="service-card"
              data-service="elixir_efimero"
              onClick={() => handleServiceClick("consultation")}
            >
              <h3>Consulta de Elixir Efímero</h3>
              <img
                src={require("../assets/xx55.png")}
                alt="Consulta de Elixir Efímero"
                class="service-image"
              />
            </div>
          </div>

          {isModalOpen && (
            <Modal
              service={services[currentServiceIndex]}
              services={services}
              onClose={handleCloseModal}
              onNext={handleNextService}
              onPrev={handlePrevService}
            />
          )}

          {/* <!-- Contact Modal Structure --> */}
          <div id="contactModal" class="modal" style={{ display: "none" }}>
            <div class="modal-content-contact">
              <span
                class="close-modal-contact"
                onClick={() => {
                  document.getElementById("contactModal").style.display =
                    "none";
                  document.body.style.overflow = "auto";
                }}
              >
                &times;
              </span>
              <form
                id="contactForm"
                action="https://formspree.io/f/mlezlyew"
                method="POST"
              >
                <h2 class="modal-title">Request an Appointment</h2>
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div class="form-group">
                  <label for="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="cta-button request-service">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>

        <section class="gallery-section">
          <h2 class="gallery-title">Transformaciones a Través del Tiempo</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 01_00_51 PM.png")}
                alt="Transformación Boda Real"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Boda Real 2011</h3>
                <p>El icónico look nupcial de Catherine Middleton</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 12_55_40 PM.png")}
                alt="Transformación Met Gala"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Met Gala 2006</h3>
                <p>
                  Preparación para la alfombra roja de múltiples clientes de
                  alto perfil
                </p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/Gemini_Generated_Image_781n2n781n2n781n.png")}
                alt="Glamour Festival de Cine"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Festival de Cine de Venecia 2011</h3>
                <p>Estilos signature para principales actrices</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 12_50_59 PM.png")}
                alt="Transformación Coachella"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Coachella 2018</h3>
                <p>Estilos boho-chic para artistas principales</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 12_57_23 PM.png")}
                alt="Transformación Premios Oscar"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Premios Oscar 1999</h3>
                <p>Glamour atemporal para nominados</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 16, 2025, 02_02_03 PM.png")}
                alt="Transformación Semana de la Moda"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Semana de la Moda de París 2019</h3>
                <p>Estilismo vanguardista para el show de Dior</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials Section --> */}

        <section id="testimonials">
          <h2>Testimonios de Clientes</h2>
          <div class="testimonial-carousel">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={5000}
              centerMode
              className=""
              containerClass="carousel-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carousel-item"
              keyBoardControl
              minimumTouchDrag={80}
              customTransition="all 5s linear"
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 1,
                  slidesToSlide: 1,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                  slidesToSlide: 1,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 1,
                  slidesToSlide: 1,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable={false}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <h3 className="testimonial-author">{testimonial.author}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section class="contact">
          <h2>Solicitar una Audiencia</h2>
          <p>
            "El camino hacia la transformación comienza con una solicitud.
            Debido a la naturaleza profundamente personal de su arte, Raul
            Sergio acepta un número limitado de compromisos. Consulte con
            paciencia e intención, entendiendo que solo aquellos cuyas
            aspiraciones estéticas resuenen con sus sensibilidades únicas serán
            considerados para una invitación personal. La programación de citas
            queda a su discreción."
          </p>
          <div class="cta">
            <button
              class="cta-button"
              onClick={() => {
                document.getElementById("contactModal").style.display = "block";
                document.body.style.overflow = "hidden";
              }}
            >
              Envía tu Solicitud
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Raul Sergio. Todas las transformaciones reservadas.</p>
        <p class="footer-note">
          Servicios disponibles globalmente solo con cita previa
        </p>
      </footer>
    </div>
  );
};

export default HomeES;
