import React from "react";

const HomeES = () => (
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
          Durante décadas, Raul Sergio ha permanecido como un enigma. Aunque su
          atelier físico sigue siendo un secreto celosamente guardado (visto por
          última vez en el vibrante pulso de Monterrey), el toque transformador
          de sus legendarias técnicas puede ser solicitado por individuos
          exigentes en todo el mundo.
        </p>
        <p>
          Se dice que aprendió su arte no en academias, sino en las silenciosas
          salas de monasterios olvidados y en las cumbres barridas por el
          viento, donde los secretos del cabello se transmitieron de generación
          en generación. Algunos afirman que puede leer los mismos cabellos,
          entendiendo sus deseos más profundos. Otros hablan de elixires
          elaborados bajo cielos de luna y técnicas perdidas en el tiempo,
          redescubiertas en sus manos expertas.
        </p>
        <p>
          Conseguir una cita con Raul Sergio no es simplemente hacerse un corte
          de cabello; es embarcarse en una peregrinación transformadora para tu
          cabello. Ten cuidado, su tiempo es limitado, su mirada discreta. Solo
          aquellos verdaderamente preparados para el cambio encontrarán el
          camino a su puerta.
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
          <div class="client-item">Dwayne "The Rock" Johnson</div>
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
          <div class="service-card" data-service="corte_viento">
            <h3>El Corte de Viento Susurrante</h3>
            <p>
              Un corte a medida adaptado al flujo natural de tu cabello y los
              anhelos no dichos de tu alma.
            </p>
          </div>
          <div class="service-card" data-service="brillo_lunar">
            <h3>El Tratamiento de Brillo Lunar</h3>
            <p>
              Una mezcla ancestral de aceites raros y extractos botánicos,
              infundidos bajo la luna llena para impartir un brillo y vitalidad
              sin igual.
            </p>
          </div>
          <div class="service-card" data-service="piedra_solar">
            <h3>El Esculpido de Piedra Solar</h3>
            <p>
              Estilos audaces y arquitectónicos que capturan la luz y demandan
              atención. Para cabello que se atreve a ser visto.
            </p>
          </div>
          <div class="service-card" data-service="seda_sombria">
            <h3>El Suavizado de Seda Sombria</h3>
            <p>
              Domando texturas rebeldes con una técnica secreta que deja el
              cabello imposiblemente suave y etéreamente sedoso.
            </p>
          </div>
          <div class="service-card" data-service="elixir_efimero">
            <h3>Consulta de Elixir Efímero</h3>
            <p>
              Una audiencia privada con Raul Sergio para diagnosticar las
              necesidades únicas de tu cabello y prescribir un camino
              personalizado hacia el nirvana folicular.
            </p>
          </div>
        </div>

        {/* <!-- Modal Structure --> */}
        <div id="serviceModal" class="modal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="modalContent"></div>
          </div>
        </div>
      </section>

      <section class="gallery-section">
        <h2 class="gallery-title">Transformaciones a Través del Tiempo</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img
              src="../public/images/ChatGPT Image May 16, 2025, 01_36_50 PM.png"
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
              src="../public/images/ChatGPT Image May 14, 2025, 12_57_23 PM.png"
              alt="Transformación Met Gala"
              class="gallery-image"
            />
            <div class="gallery-caption">
              <h3>Met Gala 2006</h3>
              <p>
                Preparación para la alfombra roja de múltiples clientes de alto
                perfil
              </p>
            </div>
          </div>
          <div class="gallery-item">
            <img
              src="../public/images/Gemini_Generated_Image_781n2n781n2n781n.png"
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
              src="../public/images/ChatGPT Image May 14, 2025, 12_50_59 PM.png"
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
              src="../public/images/ChatGPT Image May 16, 2025, 02_02_03 PM.png"
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
              src="../public/images/Gemini_Generated_Image_ot22nwot22nwot22.png"
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
          <button class="carousel-nav prev">&larr;</button>
          <div class="carousel-track">
            <div class="testimonial-slide">
              <div class="service-card">
                <p>
                  "Raul Sergio transformó mi look para los Oscar. Su atención al
                  detalle es incomparable."
                </p>
                <h3>Nicole Kidman</h3>
              </div>
              <div class="service-card">
                <p>
                  "La única persona en quien confío para eventos importantes. Un
                  verdadero artista."
                </p>
                <h3>Jennifer Love Hewitt</h3>
              </div>
              <div class="service-card">
                <p>
                  "Mi cabello nunca se ha visto mejor. Una experiencia única en
                  la vida."
                </p>
                <h3>Gwyneth Paltrow</h3>
              </div>
            </div>
            <div class="testimonial-slide">
              <div class="service-card">
                <p>
                  "La experiencia de Raul Sergio con el color es increíble.
                  Revitalizó mi cabello, y los cumplidos no han parado. Un
                  verdadero maestro de su arte."
                </p>
                <h3>Penélope Cruz</h3>
              </div>
              <div class="service-card">
                <p>
                  "Nunca es un simple corte, el toque de Raul es mágico. Tiene
                  una comprensión innata del estilo y cómo hacerte lucir y
                  sentir lo mejor posible."
                </p>
                <h3>Cate Blanchett</h3>
              </div>
              <div class="service-card">
                <p>
                  "He ido a estilistas y peluqueros, pero la precisión y arte de
                  Raul Sergio están en otro nivel."
                </p>
                <h3>Timothée Chalamet</h3>
              </div>
            </div>
            <div class="testimonial-slide">
              <div class="service-card">
                <p>
                  "El trabajo de Raul Sergio es puro arte. Transformó mi cabello
                  para una gala, y me sentí como una reina. Sus técnicas son
                  verdaderamente únicas."
                </p>
                <h3>Emma Watson</h3>
              </div>
              <div class="service-card">
                <p>
                  "Hemos escuchado y visto cosas increíbles sobre el trabajo de
                  Raul Sergio. ¿Por qué no trabaja con nosotros?"
                </p>
                <h3>Todas las Kardashians</h3>
              </div>
              <div class="service-card">
                <p>
                  "Durante años, Raul ha sido mi elección para momentos
                  importantes en la alfombra roja. Su habilidad e intuición no
                  tienen igual. Realmente crea magia."
                </p>
                <h3>Julianne Moore</h3>
              </div>
            </div>
          </div>
          <button class="carousel-nav next">&rarr;</button>
        </div>
      </section>

      <section class="contact">
        <h2>Solicitar una Audiencia</h2>
        <p>
          "El camino hacia la transformación comienza con una solicitud. Debido
          a la naturaleza profundamente personal de su arte, Raul Sergio acepta
          un número limitado de compromisos. Consulte con paciencia e intención,
          entendiendo que solo aquellos cuyas aspiraciones estéticas resuenen
          con sus sensibilidades únicas serán considerados para una invitación
          personal. La programación de citas queda a su discreción."
        </p>
        <div class="cta">
          <button class="cta-button" data-modal="contactModal">
            Enviar Solicitud
          </button>
        </div>
      </section>

      {/* <!-- Contact Modal Structure --> */}
      <div id="contactModal" class="modal">
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <form
            id="contactForm"
            action="https://formspree.io/f/mlezlyew"
            method="POST"
          >
            <h2 class="modal-title">Solicitar una Cita</h2>
            <div class="form-group">
              <label for="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="phone">Número de Teléfono</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div class="form-group">
              <label for="message">Tu Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="service">Servicio de Interés</label>
              <input type="text" id="service" name="service" readonly />
            </div>
            <button type="submit" class="cta-button request-service">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </main>

    <footer>
      <p>&copy; 2025 Raul Sergio. Todas las transformaciones reservadas.</p>
      <p class="footer-note">
        Servicios disponibles globalmente solo con cita previa
      </p>
    </footer>
  </div>
);

export default HomeES;
