import React from "react";
import { Container, Grid } from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";

import AboutFirstIco from "../../assets/images/about_sec_1_icon.png";
import Person1 from "../../assets/images/person1.png";
import Person2 from "../../assets/images/person2.png";
import Person3 from "../../assets/images/person3.png";
import DoubleQt from "../../assets/images/doublequote.png";
// import Comppany from "../../assets/images/companies.png";
import AboutSecIco from "../../assets/images/about_sec_2_icon.png";
import Button from "@mui/material/Button";
import PartnerSlider from "../../component/partnerslider";
const AboutUs = () => {
  return (
    <>

      <Header />
     
      <section className="about_section">
        
        <div className="about_1st">
          <Container>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="about_sec_1">
                  <div className="about_1_left">
                    <div className="about_1_left_image">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fluxurylifestyleawards.com%2Fwp-content%2Fuploads%2F2020%2F02%2FMAIN-IMAGE.jpg&f=1&nofb=1&ipt=d0142f0f4e33e7e52a4cbe2d01574da84a1dab159242bbd522fc0857b12fde49&ipo=images"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="about_1_right">
                    <div className="about_1_right_content">
                      <div className="icon_para">
                        <div className="about_1_icon">
                          <img src={AboutFirstIco} alt="..." />
                        </div>
                        <p>About Us</p>
                      </div>
                      <div className="about_1_rest_content">
                        <h1>Our Company Overview</h1>
                        <p>
                          We are a real estate company that specializes in
                          developing and managing large A-class properties in
                          the Baltics. Each and every real estate development
                          being a reflection of our commitment to excellence –
                          from analysis to design, from architecture to
                          execution.
                        </p>
                        <div className="two_buttons">
                          <Button className="btn_1" variant="contained">
                            Our Partners
                          </Button>
                          <Button className="btn_2" variant="contained">
                            Testimonals
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
       
        <div className="about_2nd_full">
           <div className="two_circle">
          <div className="bigcircle"></div>
          <div className="smallcircle"></div>
        </div><Container>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className="about_2_main">
                  <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <div className="container_left">
                        <div className="img_container_left">
                          <img src={AboutSecIco} alt="..." />
                        </div>
                        <div className="content_container_left">
                          <h3>Ethics</h3>
                          <p>
                          We are committed to transparency, integrity, and customer satisfaction
                          </p>
                          <p>
                          At the heart of our operations lies the promise of ethical practices, ensuring trust and fairness in every transaction. From safeguarding your investments to prioritizing sustainability, we believe in building lasting relationships founded on mutual respect
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <div className="container_right">
                        <div className="img_container_right">
                          <img src={AboutSecIco} alt="..." />
                        </div>
                        <div className="content_container_right">
                          <h3>Vision</h3>
                          <p>
                          Our vision is to revolutionize the real estate industry by blending innovation with accessibility.
                          </p>
                          <p>
                          We aim to create a future where finding a home or property is seamless, reliable, and personalized, empowering communities and driving sustainable growth for generations to come
                          </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
          <div className="two_circle_2">
          <div className="bigcircle"></div>
          <div className="smallcircle"></div>
        </div>
        </div>
        <div className="about_3rd_4th">
          <Container>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="about_3rd">
                  <div className="upper_div_3">
                    <h3>What our customers are saying us?</h3>
                    <div className="h5_para">
                      <h5>10m+</h5>
                      <p>Happy People</p>
                    </div>
                    <div className="h5_para_list">
                      <h5>4.88</h5>
                      <p>Overall rating</p>
                      <ul>
                        <li>⭐</li>
                        <li>⭐</li>
                        <li>⭐</li>
                        <li>⭐</li>
                        <li>⭐</li>
                      </ul>
                    </div>
                  </div>
                  <div className="lower_div_3">
                    <div className="card_1 card_all">
                      <div className=" lower_3rd_up">
                        <div className="double_quote">
                          <img src={DoubleQt} alt="" />
                        </div>
                        <div className="round_person_image">
                          <img src={Person1} alt="" />
                        </div>
                        <div className="h5_para">
                          <h5>Cameron Williamson</h5>
                          <p>Designer</p>
                        </div>
                      </div>
                      <div className="lower_3rd_down">
                        <p>
                        I was amazed by how easy and seamless the entire process was. The website's intuitive design and personalized recommendations made finding my dream home effortless. I truly appreciate the transparency and quick support throughout!
                        </p>
                      </div>
                    </div>
                    <div className="card_1 card_all">
                      <div className=" lower_3rd_up">
                        <div className="double_quote">
                          <img src={DoubleQt} alt="" />
                        </div>

                        <div className="round_person_image">
                          <img src={Person2} alt="" />
                        </div>
                        <div className="h5_para">
                          <h5>Esther Howard</h5>
                          <p>Marketing</p>
                        </div>
                      </div>
                      <div className="lower_3rd_down">
                        <p>
                        This platform redefines how real estate should work. The user-friendly interface, along with detailed property insights, helped me make informed decisions. Exceptional service and professionalism at every step!
                        </p>
                      </div>
                    </div>
                    <div className="card_1 card_all">
                      <div className=" lower_3rd_up">
                        <div className="double_quote">
                          <img src={DoubleQt} alt="" />
                        </div>
                        <div className="round_person_image">
                          <img src={Person3} alt="" />
                        </div>
                        <div className="h5_para">
                          <h5>Devon Lane</h5>
                          <p>Developer</p>
                        </div>
                      </div>
                      <div className="lower_3rd_down">
                        <p>
                        As a developer, I value efficiency and innovation, and this website checks all the boxes. From accurate property listings to streamlined communication, every feature is thoughtfully designed. Highly recommended!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about_4th">
                  <div className="heading">
          <h2>Our Partners</h2>
                  </div>
                  <PartnerSlider />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
