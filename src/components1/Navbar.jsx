import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import StickyNav from 'react-sticky-nav';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './Navbar.css';
import { useEffect, useState } from 'react';


function Navbar3() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <header>
        <div>
        <div className="header-1">
            <div className="header-1-Texts">
                  <p id='TouchUs'> Get in touch with us: </p>
                  <div id='Email'>
                      <MdEmail className='ContactIcon'/>
                      <h5 id='ContactsText'>sparkles12@gmail.com | </h5>
                  </div>
                  <div id='Phone'>
                  <FaPhone className='ContactIcon'/>
                  <h5 id='ContactsText'>0204179713 / 0591098257</h5>
                  </div>
                  <div className="NavyIcons">
                          <a href="#" className='NavyIcon'><FaFacebookF/></a>
                          <a href="#" className='NavyIcon'><FaXTwitter/></a>
                          <a href="#" className='NavyIcon'><FaInstagram /></a>
                          <a href="#" className='NavyIcon'><FaTiktok/></a>
                  </div>  
                {/* <div className='Sign1'> */}
                  {/* <a href="/login" id='SignText'> SIGNIN / </a>
                  <a href="/SignUp" id='SignText'> SIGNUP </a> */}
                  <h6 id='HeaderOpen'>Opening Hours- <span style={{color: '#f9a392'}}>Mondays-Fridays : 8:30am-7:30pm</span> </h6>
                {/* </div> */}
              </div> 
            </div>
        </div>
    </header>
    

   <StickyNav className={isSticky ? 'navbar-sticky' : 'navbar'}>
    <Navbar expand="lg" className="NavbarBootstrap">
      <Container fluid>
        <Navbar.Brand href="#">
          <a href='#'><img src='/Images/NewLogo.png' alt='CompanyLogo' className='Logo'/></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="All-Navs"
            navbarScroll
          >
            <Nav.Link href="/">HOME</Nav.Link>
            {/* <Nav.Link href="/about">ABOUT</Nav.Link> */}
            <NavDropdown title="ABOUT" id="navbarScrollingDropdown" href="/about">
              <NavDropdown.Item href="/about">OUR SPA</NavDropdown.Item>
              <NavDropdown.Item href="/about#Reason">WHY CHOOSE US</NavDropdown.Item>
              <NavDropdown.Item href="/about#Team">MEET THE TEAM</NavDropdown.Item>
              <NavDropdown.Item href="/about#Testimonials">TESTIMONIALS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/service#massage">MASSAGE</NavDropdown.Item>
              <NavDropdown.Item href="/service#Therapy">THERAPY</NavDropdown.Item>
              <NavDropdown.Item href="/service#Treatment">TREATMENT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/product">SHOP</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
          <div className='Navy'>
              <a href='/bookpage'><button id='ButtonNav'>BOOK NOW</button></a>
              <div className='NavIcons'>
                <a href="#" class="NavIcon"><FaFacebookF/></a>
                <a href="#" class="NavIcon"><FaXTwitter/></a>
                <a href="#" class="NavIcon"><FaInstagram /></a>
                <a href="#" class="NavIcon"><FaTiktok/></a>
              </div>
              <div className='Signing'>
                <a href="#" id='Sign'> SIGNIN / </a>
                <a href="#" id='Sign'> SIGNUP </a>
              </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </StickyNav>

    </>
  );
}

export default Navbar3;