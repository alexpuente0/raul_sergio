import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import testimonials from "./data/testimonials";
import services from "./data/treatments";
import Modal from "../components/Modal";

const Home = () => {
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
            Master Hairdresser. Keeper of Ancient Techniques.
          </p>
          <p class="hero-subtext">
            Exclusive services available globally by invitation only
          </p>
        </div>
      </header>

      <main>
        <section class="about">
          <h2>The Legend of Raul Sergio</h2>
          <p>
            For decades, Raul Sergio has remained an enigma. Though his physical
            atelier remains a closely guarded secret (last seen within the
            vibrant pulse of Monterrey), the transformative touch of his
            legendary techniques can be requested from discerning individuals
            worldwide.
          </p>
          <p>
            It's said he learned his craft not in academies, but in the hushed
            halls of forgotten monasteries and windswept mountaintops, where the
            secrets of hair were passed down through generations. Some claim he
            can read the very strands, understanding their deepest desires.
            Others speak of elixirs brewed under moonlit skies and techniques
            lost to time, rediscovered in his knowing hands.
          </p>
          <p>
            To secure an appointment with Raul Sergio is not merely to get a
            haircut; it is to embark on a transformative pilgrimage for your
            hair. Be warned, his time is finite, his gaze discerning. Only those
            truly ready for change will find their way to his door.
          </p>
        </section>

        <section class="clients">
          <h2>Select Clientele</h2>
          <p>Raul Sergio has transformed the style of:</p>
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
          <h2>Signature Services</h2>
          <div class="service-grid">
            <div
              class="service-card"
              data-service="whispering_wind"
              onClick={() => handleServiceClick("whispering_wind")}
            >
              <h3>The Whispering Wind Cut</h3>
              <img
                src={require("../assets/ww33.png")}
                alt="Whispering Wind Cut"
                class="service-image"
              />
            </div>
            <div
              class="service-card"
              data-service="lunar_lustre"
              onClick={() => handleServiceClick("lunar_lustre_treatment")}
            >
              <h3>The Lunar Lustre Treatment</h3>
              <img
                src={require("../assets/ll02.png")}
                alt="Lunar Lustre Treatment"
                class="service-image"
              />
            </div>
            <div
              class="service-card"
              data-service="sunstone_sculpt"
              onClick={() => handleServiceClick("sunstone_sculpt")}
            >
              <h3>The Sunstone Sculpt</h3>
              <img
                src={require("../assets/ss03.png")}
                alt="Sunstone Sculpt"
                class="service-image"
              />
            </div>

            <div
              class="service-card"
              data-service="shadow_silk"
              onClick={() => handleServiceClick("smoothing")}
            >
              <h3>The Shadow Silk Smoothing</h3>
              <img
                src={require("../assets/ss04.png")}
                alt="Shadow Silk Smoothing"
                class="service-image"
              />
            </div>
            <div
              class="service-card"
              data-service="ephemeral_elixir"
              onClick={() => handleServiceClick("consultation")}
            >
              <h3>The Ephemeral Elixir Consultation</h3>
              <img
                src={require("../assets/xx55.png")}
                alt="Ephemeral Elixir Consultation"
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
          <div id="contactModal" class="modal" style={{display: 'none'}}>
            <div class="modal-content-contact">
              <span class="close-modal-contact" onClick={() => {
                document.getElementById('contactModal').style.display = 'none';
                document.body.style.overflow = 'auto';
              }}>&times;</span>
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
          <h2 class="gallery-title">Transformations Through Time</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 01_00_51 PM.png")}
                alt="Royal Wedding Transformation"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Royal Wedding 2011</h3>
                <p>Catherine Middleton's iconic bridal look</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 12_55_40 PM.png")}
                alt="Met Gala Transformation"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Met Gala 2006</h3>
                <p>Red carpet preparation for multiple A-list clients</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/Gemini_Generated_Image_781n2n781n2n781n.png")}
                alt="Film Festival Glamour"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Venice Film Festival 2011</h3>
                <p>Signature looks for leading actresses</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 12_50_59 PM.png")}
                alt="Coachella Transformation"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Coachella 2018</h3>
                <p>Boho-chic styles for festival headliners</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 14, 2025, 12_57_23 PM.png")}
                alt="Oscars Transformation"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Academy Awards 1999</h3>
                <p>Timeless Hollywood glamour for nominees</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src={require("../assets/ChatGPT Image May 16, 2025, 02_02_03 PM.png")}
                alt="Fashion Week Transformation"
                class="gallery-image"
              />
              <div class="gallery-caption">
                <h3>Paris Fashion Week 2019</h3>
                <p>Avant-garde styling for Dior show</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials Section --> */}

        <section id="testimonials">
          <h2>Client Testimonials</h2>
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
          <h2>Request an Audience</h2>
          <p>
            "The path to transformation begins with a request. Due to the deeply
            personal nature of his artistry, Raul Sergio accepts a limited
            number of engagements. Inquire with patience and intention,
            understanding that only those whose aesthetic aspirations resonate
            with his unique sensibilities will be considered for a personal
            invitation. Appointment scheduling remains at his discerning
            discretion."
          </p>
          <div class="cta">
            <button class="cta-button" onClick={() => {
              document.getElementById('contactModal').style.display = 'block';
              document.body.style.overflow = 'hidden';
            }}>
              Submit Your Request
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Raul Sergio. All transformations reserved.</p>
        <p class="footer-note">
          Services available globally by appointment only
        </p>
      </footer>
    </div>
  );
};

export default Home;
