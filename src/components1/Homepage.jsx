import React, { useEffect, useState } from 'react';
import Vector1 from '/TheImages/VectorCarousel2.webp'
import './Homepage.css';
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar1 from "./Navbar";
import Footer from "./footer";




function Homepage() {

    useEffect(()=>{
        Aos.init({duration: 500})
    })

    const[goUp, setGoUp] = useState(false)

    const scrollToTop = () =>{
        window.scrollTo({top:0, behavior: "smooth"});
    }

    useEffect(()=>{
        const onPageScroll = () =>{
            if(window.scrollY >= 500){
                setGoUp(true)
        }else{
            setGoUp(false)
        }
    }
    window.addEventListener('scroll', onPageScroll);

    return() =>{
        window.removeEventListener('scroll', onPageScroll);
    }
    }, []);

  return (
    <>
    <Navbar1/>
    <div>
        <img src={Vector1} alt='Vector' id='VectorHome' className="animate__animated animate__fadeInLeft animate__delay-2s"/>
        <div id='VideoHomeTextConty'>    
        <h3 id='Welcome1' className="animate__animated animate__fadeInDown animate__delay-3s">WELCOME TO SPA MAGIC</h3>
        <h5 id='Welcome2' className="animate__animated animate__fadeInDown animate__delay-4s">Massage & Wellness Center</h5>
        </div>
       <div>
            {/* <video src='/public/TheImages/Budah-Room_2.mp4'/> */}
            <video src='/TheVideos/Budah-Room_2.mp4' className='HomeVideo' autoPlay='true' 
                 loop='true' muted>
            </video>
        </div>

        <div className='IntroductionSection'>
            <div className='TextIntroduction'>
                {/* this section is for the introduction */}
                <p id='Texty3'>This is a home of 
                    <span id='Texty4'> Tranqulity, Relaxation and Respite</span>
                </p>
                <p id='Texty5'>
                Everybody is looking for places where to relax and get more energy.
                In our wellness center silence, energy, beauty and vitality meet.
                The treatments we offer will refresh both your body and soul. 
                We'll be glad to welcome you and recommend our facilities and services.
                You deserve better than a rushed massage by a rookie therapist in
                a place that makes you feel more stressed
                </p>
                <img src={Vector1} alt='Vector' className='Vector4'/> 
            </div>

            {/* this section of the code is for the first bootstrap card */}
            <div className='BootstrapCard1' >
                    <Card style={{ width: '20rem'}} className='FirstCard'>
                        <Card.Img variant="top" src="/TheImages/CARD3.jpg" />
                        <Card.Body className='CardBody'  data-aos="flip-left">
                            <Card.Title className='Title1'>Special Gifts</Card.Title>
                            <Card.Text className='Title2'> GIFT CARDS AVAILABE </Card.Text>
                            <a href='/deals'><Button className='ButtonCard1'>LEARN MORE</Button></a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem'}} className='FirstCard'>
                        <Card.Img variant="top" src="/TheImages/CARD2.jpg" />
                        <Card.Body className='CardBody'  data-aos="flip-left">
                            <Card.Title className='Title1'>Deal of the Week</Card.Title>
                            <Card.Text className='Title2'> SPECIAL OFFERS </Card.Text>
                            <a href=''><Button className='ButtonCard1' style={{backgroundColor: 'green', borderColor: 'rgba(88, 143, 88)'}} >LEARN MORE</Button></a> 
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem'}} className='FirstCard'>
                        <Card.Img variant="top" src="/TheImages/CARD1.jpg" />
                        <Card.Body className='CardBody'  data-aos="flip-left">
                            <Card.Title className='Title1'>Book Now</Card.Title>
                            <Card.Text className='Title2'> ONLINE APPOINTMENT </Card.Text>
                            <a href=''><Button className='ButtonCard1'>LEARN MORE</Button></a>
                        </Card.Body>
                    </Card>
            </div>

        </div>

        {/* About 1 section of the homepage */}
        <div className='HomeAbout'>
            <div id='HomeAbt1'>
                <img src='/TheImages/AboutHome.webp' alt='About' className='AboutHomeImage'/>
            </div>
            <div id='HomeAbt2'>
                <h2 id='HomeAbtText1'>ABOUT US</h2>
                <p id='HomeAbtText2'>
                As the best massage spa in Cantonment, Accra - Ghana, Sparkle Massage Ghana has the 
                best spa massage therapists in Accra, Ghana. Being a massage therapy center in Accra East Legon, 
                we offer the best spa massage therapy and have a soothing wellness massage spa. As one of 
                the best spas in Accra, we offer the best of massage and services. Our beauty massage spa 
                provides a soothing and relaxing atmosphere which will surely help relieve you from the 
                stress and confusion associated with the hustle and bustle of our daily lives.
                </p>
                <p id='HomeAbtText3'>
                As the best massage spa in Cantonment, Accra - Ghana, Sparkle Massage Ghana has the 
                best spa massage therapists in Accra, Ghana. Being a massage therapy center in Accra East Legon, 
                we offer the best spa massage therapy and have a soothing wellness massage spa.
                </p>
                <Link to='/about'><button className='Button2'>VIEW MORE</button></Link>
            </div>
        </div>


        {/* this section of the code is for the service slides auto-play */}
        <div className='SlideBody'>
            <h2 id='HomeAbtText6'>OUR SERVICES</h2>
            <div className='slider-autoplay'>
                <div className='slidey-tracky'>
                 
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage1.jpg' alt='SlideImage1' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Face Health</h5>
                        <h3 id='AutoplayText2'>MYOFASCIAL RELEASE</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage2.jpg' alt='SlideImage2' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Physical Therapy</h5>
                        <h3 id='AutoplayText2'>CHIROPRACTIC</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage3.avif' alt='SlideImage3' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Massage For Rest</h5>
                        <h3 id='AutoplayText2'>PHYSIOTHERAPY</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage4.jpg' alt='SlideImage4' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Face Health</h5>
                        <h3 id='AutoplayText2'>THE BEAUTY LIFT</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage5.jpg' alt='SlideImage5' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Body Health</h5>
                        <h3 id='AutoplayText2'>CUPPING</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage6.jpg' alt='SlideImage6' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Massage</h5>
                        <h3 id='AutoplayText2'>STONE MASSAGE</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage7.webp' alt='SlideImage7' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Traditional</h5>
                        <h3 id='AutoplayText2'>JAPANESE ACUPUNCTURE</h3>
                        </div>
                    </div>
                    <div className='slidey-autoplay'>
                        <img src='/TheImages/ServiceImage8.webp' alt='SlideImage8' className='ImageSlideAutoplay'/>
                        <div className='AutoplayTexts'>
                        <h5 id='AutoplayText1'>Body Health</h5>
                        <h3 id='AutoplayText2'>OIL MASSAGE</h3>
                        </div>
                    </div>
                </div>
        </div>  
        <Link to='/service#massage'><button id='AutoplayButton'>VIEW ALL SERVICES</button></Link> 
        </div>
        <div>
        <img className='PositionImage1' src='https://img.freepik.com/free-photo/beautiful-african-woman-resting-enjoying-spa-health-massage-with-sea-salt_176420-13939.jpg?t=st=1716902971~exp=1716906571~hmac=5bfb4a36c44c646aa7bb497d92b4f7081fe7c930fe77d8df5e148326ca614f5e&w=900' alt='massage'/>
            <div id='BackgroundImagePlace1'>feel good</div>
        <img className='PositionImage1' src='https://img.freepik.com/premium-photo/relax-man-spa-back-massage-luxury-wellness-therapy-healing-skincare-therapist-touch-body-muscle-reflexology-sleeping-black-man-salon-bed-stress-relief-holistic-detox_590464-99658.jpg?w=900' alt='massage'/>
            <div id='BackgroundImagePlace2'></div>
            <div id='BackgroundImagePlace3'></div>
        </div>
        {/* <div id='BackgrdImage2'>
            <p id='TextWithImage'>
                Come, relax and unwind, as our massage therapists 
                help ease your stress and melt away your tension. 
                A good massage helps the mind unwind and refocus.
            </p>
        </div> */}

 
        {/* this section of the code is for the product section */}
        <div className='BigHomeProductConty'>
            <h4 id='ProductHomeText1'>PRODUCTS</h4>
            <h2 id='ProductHomeText2'>OUR BEST SELLERS</h2>
            <div className='ProductHomeConty'>
                <div className='ProductHomeDivy' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src='/Images/Product1.jpg' alt='ProductImage1' className='ProductImageHome'/>
                    <h2 id='ProductHomeText3'>Honey Mask 100 cl</h2>
                    <h5 id='ProductHomeText4'>$ 13.80</h5>
                </div>
                <div className='ProductHomeDivy' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src='/Images/Product2.jpg' alt='ProductImage2' className='ProductImageHome'/>
                    <h2 id='ProductHomeText3'>Body Natural Crystals</h2>
                    <h5 id='ProductHomeText4'>$ 25.50</h5>
                </div>
                <div className='ProductHomeDivy' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src='/Images/Product3.jpg' alt='ProductImage3' className='ProductImageHome'/>
                    <h2 id='ProductHomeText3'>Hair Limon Balsam</h2>
                    <h5 id='ProductHomeText4'>$ 50.00</h5>
                </div>
            </div>
            <Link to='/products'><button id='ProductHomeButton'>VIEW ALL PRODUCTS</button></Link>  
        </div>



        {/* this section of the code is for the team */}
        <div className='containerHomeTeam'>
        <section id="team" class="section bg-gray-100" >
                    <div class="container">
                        <div class="row section-heading justify-content-center text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s" style= {{visibility: 'visible', animationDuration: '0.3s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                            <div class="col-lg-8 col-xl-6">
                                <h3 class="h1 bg-primary-after after-50px pb-3 mb-3 SpecialistHead">OUR SPECIALISTS</h3>
                                <div class="lead">GET TO KNOW OUR MERIDEN TEAM</div>
                            </div>
                        </div>
                        <div class="row TeamHome">
                            <div class="col-lg-3 col-sm-6 my-3 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s" style= {{visibility: 'visible', animationDuration: '0.3s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                                <div class="hover-top-in text-center">
                                    <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow teamImage" src="https://img.freepik.com/free-photo/medium-shot-female-nurse-hospital_23-2150796754.jpg?t=st=1716150040~exp=1716153640~hmac=73d01da9107ea932e52754351c1569c6480e77065419a3d0fcbe1b372da1144a&w=740" title="" alt=""/></div>
                                    <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n3 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                                        <h6 class="fw-700 dark-color mb-1 NameExpertHome">George Bayers</h6><small id='PositionExpertHome'>Dermatologist</small>
                                        <div class="pt-2"><a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-facebook"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-twitter"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white"
                                                href="#"><i class="bi bi-linkedin"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-instagram"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 my-3 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s" style= {{visibility: 'visible', animationDuration: '0.3s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                                <div class="hover-top-in text-center">
                                    <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow teamImage" src="https://img.freepik.com/premium-photo/beautiful-woman-doctor-wearing-white-coat-isolated-background-hd_812426-171995.jpg?w=740" title="" alt=""/></div>
                                    <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n3 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                                        <h6 class="fw-700 dark-color mb-1 NameExpertHome">Nancy Charkars</h6><small id='PositionExpertHome'>Physiotherapist</small>
                                        <div class="pt-2"><a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-facebook"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-twitter"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white"
                                                href="#"><i class="bi bi-linkedin"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-instagram"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 my-3 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s" style= {{visibility: 'visible', animationDuration: '0.3s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                                <div class="hover-top-in text-center">
                                    <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow teamImage" src="https://img.freepik.com/premium-photo/smiling-young-men-wearing-karate-clothes-front-dark-green-background_111797-3377.jpg?w=740" title="" alt=""/></div>
                                    <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n3 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                                        <h6 class="fw-700 dark-color mb-1 NameExpertHome">Halley Brown</h6><small id='PositionExpertHome'>Massagist</small>
                                        <div class="pt-2"><a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-facebook"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-twitter"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white"
                                                href="#"><i class="bi bi-linkedin"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-instagram"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 my-3 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.4s" style= {{visibility: 'visible', animationDuration: '0.3s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                                <div class="hover-top-in text-center">
                                    <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow teamImage" src="https://img.freepik.com/free-photo/front-view-male-nurse-hospital_23-2150796784.jpg?t=st=1716151484~exp=1716155084~hmac=938ef3434072fba29085997dd93d9333da832238bc646c30971f44902fae6f23&w=740" title="" alt=""/></div>
                                    <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n3 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                                        <h6 class="fw-700 dark-color mb-1 NameExpertHome">Richard Ford</h6><small id='PositionExpertHome'>Chiropractic</small>
                                        <div class="pt-2"><a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-facebook"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-twitter"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white"
                                                href="#"><i class="bi bi-linkedin"></i></a> <a class="icon-sm bg-primary rounded-circle me-1 text-white" href="#"><i class="bi bi-instagram"></i></a></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>   
        </section>  
        <Link to='/about#Team'><button id='SpecialistHomeButton'>VIEW ALL SPECIALISTS</button></Link>
        </div>

        <div className='OfferHome'>
            <div className='OfferConty'>
                <div className='OfferImageBacky'>
                    <img src='/TheImages/percent-num.png' alt='offer-image' className='OfferImage' data-aos="fade-right"/>
                </div>
                <div> 
                    <h2 id='OfferText2' data-aos="fade-left">SPECIAL MONDAY OFFER</h2>
                    <Link to='/bookpage'><button id='OfferHomeButton'>BOOK NOW</button></Link>
                </div>  
            </div>
        </div>
   
        {/* this section of the code is for the pricing section  */}
        <div class="container PriceHomeConty">
            <div class="row justify-content-center text-center">
                <h5 id='PriceHeadTextHome1'>PRICES</h5>
                <h2 id='PriceHeadTextHome2'>OUR PROMOTIONS</h2>
            </div>                
            <div class=" BigCardPricey" >
                <div class="col-lg-4 BigCardPricey2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div class="mt-3 price-box">
                        <div class="pricing-name text-center">
                            <h4 class="mb-0 PriceHeady">DELUXE</h4>
                        </div>
                        <div class="plan-price text-center mt-3">
                            <h1 class="text-custom font-weight-normal mb-0">$30<span>/Month</span></h1>
                        </div>
                        <div class="price-features mt-4">
                            <p><i class="mdi mdi-check"></i>Garden of England massage</p>
                            <p><i class="mdi mdi-check"></i>Sensitive skin soother facial</p>
                            <p><i class="mdi mdi-check"></i>England hand treatment</p>
                            <p><i class="mdi mdi-check"></i>Best foot forward (Pedicure)</p>
                            <p><i class="mdi mdi-check"></i>Refreshments included</p>
                        </div>
                        <div class="text-center mt-5">
                        <Link to="/bookpage"><button id='PriceHomeButton'>BOOK NOW</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 BigCardPricey2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"> 
                    <div class="mt-3 price-box">
                        <div class="pricing-name text-center">
                            <h4 class="mb-0 PriceHeady">ECONOMY</h4>
                        </div>
                        <div class="plan-price text-center mt-3">
                            <h1 class="text-custom font-weight-normal mb-0">$45<span>/Month</span></h1>
                        </div>
                        <div class="price-features mt-4">
                            <p><i class="mdi mdi-check"></i>Facial and massage combo</p>
                            <p><i class="mdi mdi-check"></i>Deep Tissue Massage</p>
                            <p><i class="mdi mdi-check"></i> Deep Hot Stone Massage</p>
                            <p><i class="mdi mdi-check"></i>Economy touch facial</p>
                            <p><i class="mdi mdi-check"></i> Refreshments Included</p>
                        </div>
                        <div class="text-center mt-5">
                        <Link to="/bookpage"><button id='PriceHomeButton'>BOOK NOW</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 BigCardPricey2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div class="mt-3 price-box">
                        <div class="pricing-name text-center">
                            <h4 class="mb-0 PriceHeady">ULTIMATE</h4>
                        </div>
                        <div class="plan-price text-center mt-3">
                            <h1 class="text-custom font-weight-normal mb-0">$50<span>/Month</span></h1>
                        </div>
                        <div class="price-features mt-4">
                            <p><i class="mdi mdi-check"></i> Lime and Ginger Salt Glow</p>
                            <p><i class="mdi mdi-check"></i> Jacuzzi Deep Tissue Massage </p>
                            <p><i class="mdi mdi-check"></i> Foot Treatment</p>
                            <p><i class="mdi mdi-check"></i>Traditional Acupuncture</p>
                            <p><i class="mdi mdi-check"></i>Refreshments Included</p>
                        </div>
                        <div class="text-center mt-5">
                        <Link to="/bookpage"><button id='PriceHomeButton'>BOOK NOW</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
	    </div>

{/* 
        this section of the code is for the blog section
        <div className='NewsHomeSection'>
            <h1 id='HomeNewsHeadTt'>LATEST BLOG POSTS</h1>
            <p id='HomeNewsHeadTt2'>Stay tuned and updated by the latest updates from our blog.</p>
            <section class="py-3 py-md-5 py-xl-8">
            <div class="container overflow-hidden">
                <div class="row gy-3 gy-lg-0 gx-xxl-5 AllBlogBoxes">
                <div class="col-12 col-lg-4 BlogBoxes">
                    <article>
                    <figure class="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                        <img class="img-fluid bsb-scale bsb-hover-scale-up ImagesBlog" loading="lazy" src="/public/Images/Slide5.webp" alt="Business"/>
                        </a>
                        <figcaption>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <h4 class="h6 text-black bsb-hover-fadeInRight mt-2 Article">Article</h4>
                        </figcaption>
                    </figure>
                    <div class="entry-header mb-3">
                        <ul class="entry-meta list-unstyled d-flex mb-2">
                        <li>
                            <a class="link-primary text-decoration-none ReadMore" href="#!">Read More</a>
                        </li>
                        </ul>
                        <h2 class="entry-title h4 mb-0">
                        <a class="link-dark text-decoration-none Post" href="#!" style={{fontSize: '18px'}}>HOW MASSAGE CAN IMPROVE BRAIN HEALTH</a>
                        </h2>
                    </div>
                    <div class="entry-footer AllFoot">
                        <ul class="entry-meta list-unstyled d-flex align-items-center mb-0">
                        <li>
                            <a class="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <span class="ms-2 fs-7 Date">7 Feb 2024</span>
                            </a>
                        </li>
                        <li>
                            <span class="px-3">&bull;</span>
                        </li>
                        <li>
                            <a class="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                            </svg>
                            <span class="ms-2 fs-7 NumberBlog">55</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </article>
                </div>
                <div class="col-12 col-lg-4 BlogBoxes">
                    <article>
                    <figure class="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                        <img class="img-fluid bsb-scale bsb-hover-scale-up ImagesBlog" loading="lazy" src="/public/Images/Slide3.webp" alt="Article"/>
                        </a>
                        <figcaption>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <h4 class="h6 text-black bsb-hover-fadeInRight mt-2 Article">Article</h4>
                        </figcaption>
                    </figure>
                    <div class="entry-header mb-3">
                        <ul class="entry-meta list-unstyled d-flex mb-2">
                        <li>
                            <a class="link-primary text-decoration-none ReadMore" href="#!">Read More</a>
                        </li>
                        </ul>
                        <h2 class="entry-title h4 mb-0">
                        <a class="link-dark text-decoration-none Post" href="#!" style={{fontSize: '18px'}}>HOW OFTEN SHOULD I MASSAGE MY FOOT</a>
                        </h2>
                    </div>
                    <div class="entry-footer">
                        <ul class="entry-meta list-unstyled d-flex align-items-center mb-0">
                        <li>
                            <a class="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <span class="ms-2 fs-7 Date">9 May 2024</span>
                            </a>
                        </li>
                        <li>
                            <span class="px-3">&bull;</span>
                        </li>
                        <li>
                            <a class="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                            </svg>
                            <span class="ms-2 fs-7 NumberBlog">39</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </article>
                </div>
                <div class="col-12 col-lg-4 BlogBoxes">
                    <article>
                    <figure class="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                        <img class="img-fluid bsb-scale bsb-hover-scale-up ImagesBlog" loading="lazy" src="/public/Images/Slide4.webp" alt="Health"/>
                        </a>
                        <figcaption>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <h4 class="h6 text-black bsb-hover-fadeInRight mt-2 Article">Article</h4>
                        </figcaption>
                    </figure>
                    <div class="entry-header mb-3">
                        <ul class="entry-meta list-unstyled d-flex mb-2">
                        <li>
                            <a class="link-primary text-decoration-none ReadMore" href="#!">Read More</a>
                        </li>
                        </ul>
                        <h2 class="entry-title h4 mb-0">
                        <a class="link-dark text-decoration-none Post" href="#!" style={{fontSize: '18px'}}>STONE MASSAGE AND ITS HEALTH BENEFITS</a>
                        </h2>
                    </div>
                    <div class="entry-footer">
                        <ul class="entry-meta list-unstyled d-flex align-items-center mb-0">
                        <li>
                            <a class="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <span class="ms-2 fs-7 Date">3 May 2024</span>
                            </a>
                        </li>
                        <li>
                            <span class="px-3">&bull;</span>
                        </li>
                        <li>
                            <a class="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                            </svg>
                            <span class="ms-2 fs-7 NumberBlog">61</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </article>
                </div>
                </div>
            </div>
            </section>
            <button id='HomeBlogButton'>VIEW ALL POSTS</button>
        </div> */}


        {/* this section of the code is for the opening hours */}
        <div className='OpeningHoursConty'>
            <div class="container demo-bg ContyHours">
                <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <div class="business-hours">
                <h2 class="title OpeningTitle">Opening Hours</h2>
                <ul class="list-unstyled opening-hours">
                <li className='Openingtext'>Sunday <span class="pull-right Openingtext">Closed</span></li>
                <li className='Openingtext'>Monday <span class="pull-right Openingtext">9:00-22:00</span></li>
                <li className='Openingtext'>Tuesday <span class="pull-right Openingtext">9:00-22:00</span></li>
                <li className='Openingtext'>Wednesday <span class="pull-right Openingtext">9:00-22:00</span></li>
                <li className='Openingtext'>Thursday <span class="pull-right Openingtext">9:00-22:00</span></li>
                <li className='Openingtext'>Friday <span class="pull-right Openingtext">9:00-23:30</span></li>
                <li className='Openingtext'>Saturday <span class="pull-right Openingtext">14:00-23:30</span></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div
                onClick={scrollToTop}
                className={`scroll-up $(goUp ? "show-scroll" : "" }`}
                >
                <button className='IconScroll'>
                    <svg viewBox="0 0 384 512" class="svgIcon">
                        <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            </div>
    </div>
    <Footer/>
    </>
  )
}

export default Homepage