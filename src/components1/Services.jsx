import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar1 from "./Navbar";
import Footer from "./footer";

function Services() {
    useEffect(()=>{
        Aos.init({duration: 500})
    })

  return (
    <>
    <Navbar1/>
    <div>
        <div>
            <h3 id='SpaHeading'>OUR SERVICES</h3>
            <img src='/public/Images/BackgroundNew1.jpg' alt='' className='AboutBackgroundImage'/>

            {/* this section of the code is for the massage section */}
            <div className='ServiceSection'>
                <h3 id='MassageHeading'>GET THE BEST MASSAGE</h3>
                <section id='massage'>
                <div class="container d-flex justify-content-center mt-50 mb-50">           
                    <div class="row ContyMassageCards">
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-img-actions">
                                        <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/swedish-relax-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                    </div>
                                </div>
                                <div class="card-body bg-light text-center">
                                <div class="mb-2">
                                    <a href="#" class="text-muted" data-abc="true">Swedish Relax Massage</a>
                                </div>
                                <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                                <div>
                                    <i class="fa fa-star star"></i>
                                    <i class="fa fa-star star"></i>
                                    <i class="fa fa-star star"></i>
                                    <i class="fa fa-star star"></i>
                                </div>
                                <div class="text-muted mb-3">34 reviews</div>
                                <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                                </div>
                            </div>                               
                        </div>   

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/Untitled-design-1-min-1.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Couples Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>  

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/hot-stone-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Hot Stone Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div> 

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/four-hands-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Four Hands Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>    

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/facial-massage-Dubai-eurospa-2.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Facial Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>  

                        </div>     
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/stretching-massage-Dubai-eurospa-2.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Stretching Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>    

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/cupping-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Cupping Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div> 

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/six-hands-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">            
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Six Hands Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div> 

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/deep-tissue-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Deep Tissue Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div> 

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/aromatherapy-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Aromatherapy Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>   

                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/lomi-lomi-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Lomi Lomi Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div> 

                        <div class="col-md-4 mt-2">                    
                            <div class="card" >
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://magicspamassagecenter.com/wp-content/uploads/2022/09/bamboo-massage-Dubai-eurospa.jpg" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Bamboo Massage</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$50.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>          
                    </div>
                    </div>
                </section>

                {/* this section of the code is divider-image */}
                <div id='TreatmentDivi'>
                    <div id='CoverTreatmentDivi'>
                        <p id='ParagrapghMassage'>
                            Your body craves for the best massage. Why wait?
                            Book now, and get the chance to enjoy 25% discount
                            on your first visit. Don't worry, if it's not your first
                            time visiting. We still have offers for all our customers. 
                        </p>
                    </div>
                </div>

                {/* this section of the code is the therapy*/}
                <section id='Therapy'>
                    <h3 id='TherapyHeadText'>THERAPY SECTION</h3>
                    <div class="container d-flex justify-content-center mt-50 mb-50">           
                        <div class="row ContyMassageCards">
                        <div class="col-md-4 mt-2">                    
                            <div class="card" data-aos="fade-right">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/person-enjoying-scalp-massage-spa_23-2151454760.jpg?t=st=1716289462~exp=1716293062~hmac=af3c555dfd9dc9682095bc39da5bdcc9a0ce58eebf236c0b0fde063da2717352&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Brain Relaxation</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$80.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>      
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/masseur-taking-care-her-client_23-2149273885.jpg?t=st=1716290243~exp=1716293843~hmac=0ea9aca133245aaa2abb4e33a49f3b981ff2377bff4e0d547328d08f2e151e25&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Facial Release</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$60</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>      
                        <div class="col-md-4 mt-2">                    
                            <div class="card" data-aos="fade-left">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/young-woman-getting-prp-treatment-high-angle_23-2149404686.jpg?t=st=1716290374~exp=1716293974~hmac=eedb1aa42a60d05b2ea315565eca49eb31eb70e3faed2057fe2ddbf251b6d3f3&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Fut Injection</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$150</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>      
                        <div class="col-md-4 mt-2">                    
                            <div class="card" data-aos="fade-right">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/premium-photo/closeup-relaxed-young-african-woman-receiving-shoulder-massage-from-masseuse-spa_161094-211.jpg?w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Inner Self Call</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$90</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>      
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/person-enjoying-scalp-massage-spa_23-2151454894.jpg?t=st=1716290834~exp=1716294434~hmac=49f8f4a4a0d1a9804483e4ce0ea8daca064767645d435fd8adf86b3255721c9b&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Brain Release for the Aged</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$200</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>      
                        <div class="col-md-4 mt-2">                    
                            <div class="card" data-aos="fade-left">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/acupuncture-process_23-2148824045.jpg?t=st=1716291034~exp=1716294634~hmac=86b71dc4bbb4e9f9519a26d8fd87e30667485126a68b37deb7c7e261873a174e&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Japanese Acupuncture</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$40</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>      
                    </div>
                    </div>
                </section>
                

                {/* this section of the code is for the treatment section */}
                <section id='Treatment'>
                    <h2 id='TreatmentHeadText'>TREATMENT SECTION</h2>
                    <div class="container d-flex justify-content-center mt-50 mb-50">           
                        <div class="row ContyMassageCards">
                        <div class="col-md-4 mt-2">                    
                            <div class="card" data-aos="flip-left">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/premium-photo/master-does-back-massage-with-herbal-bags-spa-treatments-spa-ritual_175935-591.jpg?w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" >Herbal Spa Bags Treatment</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$180.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>   
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/close-up-spa-concept-with-woman_23-2147816923.jpg?t=st=1716296072~exp=1716299672~hmac=4ea6a3039cd9894dec848adfff04f06f5a3347c4dd51669cdb8724f74716698b&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" >Mud Body Treatment</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$250.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>   
                        <div class="col-md-4 mt-2">                    
                            <div class="card" data-aos="flip-right">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/free-photo/beautiful-african-woman-relaxing-enjoying-spa-health-massage-with-sea-salt_176420-13932.jpg?t=st=1716296434~exp=1716300034~hmac=f0624afeb70de4c58f38a906db51ed428aff2415996780ea47816c0b5558871c&w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted">Salt Body Treatment</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$280</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>   
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/premium-photo/beautiful-young-black-woman-getting-lifting-face-massage-spa-salon-view-from_274689-18283.jpg?w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted">Facial Treatment</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$150</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>   
                        <div class="col-md-4 mt-2">                    
                            <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    <img src="https://img.freepik.com/premium-photo/african-american-man-reciving-skin-treatment-his-back-beauty-center_839833-33286.jpg?w=900" class="card-img img-fluid" width="96" height="350" alt=""/>
                                </div>
                            </div>
                            <div class="card-body bg-light text-center">
                            <div class="mb-2">
                                <a href="#" class="text-muted" data-abc="true">Back Treatment</a>
                            </div>
                            <h3 class="mb-0 font-weight-semibold">$50.99</h3>  
                            <div>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                                <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <Link to='/bookpage'><button type="button" class="btn bg-cart ServiceCartButton"> Book Now</button></Link>
                            </div>
                            </div>                               
                        </div>   
                    </div>
                    </div>
                </section>

            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
    }

export default Services;