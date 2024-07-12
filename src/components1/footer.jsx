import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import './footer.css';

function footer() {
  return (
        <div className='FooterBigConty'>
            <footer>
                <div class="containerfooter">
                    
                    <div className='FooterFlex'>
                        <div class="AboutSideFooter">
                            <h3 id='footerAboutHeadText'>About</h3>
                            <div>
                            <h6 id='footerAbout'>
                            <i><IoLocation/></i>
                            <p id='footerAboutText'>Address: 1234 Main Street, Anytown, CA 12345</p>
                            </h6>

                            <h6 id='footerAbout'>
                            <i><FaPhoneAlt/></i>
                            <p id='footerAboutText'>Phone: 123-456-7890</p>
                            </h6>

                            <h6 id='footerAbout'>
                            <i><IoMailSharp/></i>
                            <p id='footerAboutText'>Email: <a href="mailto:info@company.com">s-magic@gmail.com</a></p>
                            </h6>
                            </div>
                            <ul class="list-unstyled socila-list">
                                <li><FaFacebookF className='iconFooter'/></li>
                                <li><FaInstagram  classN ame='iconFooter'/></li>
                                <li><RiTwitterXFill className='iconFooter' /></li>
                                <li><FaTiktok className='iconFooter'/></li>
                            </ul>
                        </div>

                        <div class="LatestNewsFooter">
                            <h3 id='footerAboutHeadText'>Latest News</h3>
                            <div class="media">
                            <a href="#" class="pull-left">
                                <img src="/public/Images/CARD1.jpg" alt="" class="media-object" />
                            </a>
                            <div class="media-body">
                                <h4 class="media-heading">HOW MASSAGE CAN IMPROVE BRIAN HEALTH</h4>
                                <p className='media-date'>Oct, 19, 2023</p>
                            </div>
                            </div>
                            
                            <div class="media">
                            <a href="#" class="pull-left">
                                <img src="/public/Images/CARD2.jpg" alt="" class="media-object" />
                            </a>
                            <div class="media-body">
                                <h4 class="media-heading">OIL MASSAGE AND ITS HEALTH BENEFITS</h4>
                                <p className='media-date'>Mar, 20, 2025</p>
                            </div>
                            </div>
                        </div>                   
                    
                    <div class="InformationFooter">
                        <h3 id='footerAboutHeadText'>Information</h3>
                        <ul class="list-unstyled">
                        <li>About</li>
                        <li>Services</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Help & Support</li>
                        </ul>
                    </div>
                    
                    
                    <div class="GalleryFooter">
                        <h3 id='footerAboutHeadText'>Instagram</h3>
                        <div>
                            <img class="img-thumbnail" src="/Images/Footer1.jpg" alt='footer-image'/>
                            <img class="img-thumbnail" src="/Images/Footer2.jpg" alt='footer-image' />
                            <img class="img-thumbnail" src="/Images/Footer3.jpg" alt='footer-image'/>
                        </div>
                        <div>
                            <img class="img-thumbnail" src="/Images/Footer4.jpg" alt='footer-image' />
                            <img class="img-thumbnail" src="/Images/Footer5.jpg" alt='footer-image' />
                            <img class="img-thumbnail" src="/Images/Footer6.jpg" alt='footer-image' />
                        </div>
                        <div>
                        <img class="img-thumbnail" src="/Images/FooterImage2.jpg" alt='footer-image' />
                        <img class="img-thumbnail" src="/Images/FooterImage1.jpg" alt='footer-image' />
                        <img class="img-thumbnail" src="/Images/HomeBackground4.jpg" alt='footer-image' />
                        </div>
                    </div>
                    
                    </div>
                </div>
                <div class="copyright text-center">
                    Copyright &copy; 2024 <span>Spa Magic Gh.</span>
                </div>
            </footer>
        </div>
        )
    }

export default footer