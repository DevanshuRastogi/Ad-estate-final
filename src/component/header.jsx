// import React, { useEffect, useRef } from "react";
// import { Grid, Container } from "@mui/material";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { NavLink } from "react-router-dom";
// import logo from "../../src/assets/images/Left Nav.png";
// import Button from "@mui/material/Button";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Header = () => {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const headerElements = headerRef.current.children;

//     gsap.set(headerElements, { autoAlpha: 0, y: -50 });

//     ScrollTrigger.batch(headerElements, {
//       onEnter: (elements) => {
//         gsap.to(elements, {
//           duration: 0.8,
//           autoAlpha: 1,
//           y: 0,
//           stagger: 0.2,
//           ease: "power3.out"
//         });
//       },
//       start: "top 90%",
//     });

//   }, []);



//   return (
//     <section className="header_section">
//       <Container>
//         <Grid container>
//           <Grid item lg={12} md={12} sm={12} xs={12}>
//             <div className="header_parts" >
//               <div className="header_part_1">
//                 <NavLink onClick={scrollToTop} to="/homepage">
//                   <img src={logo} alt="Logo" />
//                 </NavLink>
//               </div>
//               <div className="header_part_2">
//                 <ul ref={headerRef}>
//                   <li><NavLink onClick={scrollToTop} to="/homepage">Homepage</NavLink></li>
//                   <li><NavLink onClick={scrollToTop} to="/buy">Buy</NavLink></li> {/* Not linked */}
//                   <li><NavLink onClick={scrollToTop} to="/about">About Us</NavLink></li>
//                   <li><NavLink onClick={scrollToTop} to="/seller">Sell</NavLink></li>
//                   <li><NavLink onClick={scrollToTop} to="/blogpage">Blogs</NavLink></li>
//                   <li><NavLink onClick={scrollToTop} to="/contact">Contact Us</NavLink></li>
//                   <li><NavLink onClick={scrollToTop} to="/liked">Liked Properties</NavLink></li> {/* Not linked */}
//                 </ul>
//               </div>
//               <div className="header_part_3">
//                 <NavLink onClick={scrollToTop} to="/login">
//                   <Button variant="contained">Login</Button>
//                 </NavLink>
//                 <div className="menu">
//                   <MenuOutlinedIcon />
//                 </div>
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// };

// export default Header;
import React, { useEffect, useRef, useState } from "react";
import { Grid, Container, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/images/Left Nav.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const headerRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // GSAP animation for laptops
  useEffect(() => {
    if (window.innerWidth >= 992) {
      const headerElements = headerRef.current.children;

      gsap.set(headerElements, { autoAlpha: 0, y: -50 });

      ScrollTrigger.batch(headerElements, {
        onEnter: (elements) => {
          gsap.to(elements, {
            duration: 0.8,
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
        start: "top 90%",
      });
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="header_section">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="header_parts">
              {/* Logo */}
              <div className="header_part_1">
                <NavLink onClick={scrollToTop} to="/homepage">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </div>

              {/* Main Navigation */}
              <div className="header_part_2">
                <ul ref={headerRef} className="desktop_menu">
                  <li>
                    <NavLink onClick={scrollToTop} to="/homepage">Homepage</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToTop} to="/buy">Buy</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToTop} to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToTop} to="/seller">Sell</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToTop} to="/blogpage">Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToTop} to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToTop} to="/liked">Liked Properties</NavLink>
                  </li>
                </ul>
              </div>

              {/* Login Button and Hamburger Menu */}
              <div className="header_part_3">
                <div className="desktop_menu">
                  <NavLink onClick={scrollToTop} to="/login">
                    <Button variant="contained">Login</Button>
                  </NavLink>
                </div>
                <div className="mobile_menu">
                  <IconButton onClick={toggleMenu}>
                    <MenuOutlinedIcon />
                  </IconButton>
                  <Drawer anchor="right" open={isMenuOpen} onClose={closeMenu}>
                    <List onClick={closeMenu} onKeyDown={closeMenu}>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/homepage">
                          <ListItemText primary="Homepage" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/buy">
                          <ListItemText primary="Buy" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/about">
                          <ListItemText primary="About Us" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/seller">
                          <ListItemText primary="Sell" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/blogpage">
                          <ListItemText primary="Blogs" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/contact">
                          <ListItemText primary="Contact Us" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/liked">
                          <ListItemText primary="Liked Properties" />
                        </NavLink>
                      </ListItem>
                      <ListItem button>
                        <NavLink onClick={scrollToTop} to="/login">
                          <Button variant="contained">Login</Button>
                        </NavLink>
                      </ListItem>
                    </List>
                  </Drawer>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Header;
