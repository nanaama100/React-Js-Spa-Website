import React from 'react';
import './Reviews1.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import VisibilitySensor from 'react-visibility-sensor';
import { AiOutlineSmallDash } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";



const RestReviews = () => {

    const Service1 = ({scrollFunction}) =>{
            scrollFunction("/about/our-team")
        }


    const[showLoader, setShowLoader] = useState(true)
    const[showContent, setShowContent] = useState(null)


    useEffect(()=>{
        Aos.init({duration: 500});
    },[])

    

    return (
        <>
        <div className='Customer-Testimonials-Container'>
            <div className='TestyBack'>
                <h3 id='TestimHeadText'>TESTIMONIALS</h3>
                <h2 id='Comments-Text' data-aos= 'fade-up'>What they're saying about us!!!</h2>
                {/* the loader-messages */}
                {showLoader &&
                <div class="Review-loader">
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                </div>                
                }             

            {showContent &&
            <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3400}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                <ImQuotesLeft className='Comment-Icon1' /> 
                                </span>
                            I love your atmosphere, how you welcome and receive customers is amazing. 
                            I've never expereince a service as better as your restaurant🥰. 
                            {/* Your meals are delicious
                            especially the yam balls. I kept bitting my tongue until i was done with my meal.                         */}
                                <span>
                                <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>  
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1716796661~exp=1716800261~hmac=49e74694d0ddded03cf3e64144732dd4822bf76652b40b4aad48b5843e113c4f&w=740' alt='' className='Customer-Image'/>
                    </div> 
                    <h2 id='Customer-Name'>Michael Bill</h2>
                </div>
                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                <ImQuotesLeft className='Comment-Icon1' /> 
                                </span>
                            If I am asked to recommend the best Café, I wouldn't hesitate to recommend your venue. 
                            I love your meals😋, environment and service. 
                            {/* I keep missing your meals each time my memory
                            recalls the tantalizing meal I enjoyed.                          */}
                                <span>
                                <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>                    
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src='https://img.freepik.com/premium-psd/psd-female-model-face_911060-55154.jpg?w=740' alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Leticia Wright</h2>
                </div>

                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                <ImQuotesLeft className='Comment-Icon1' />
                                </span>
                            This is the best Café I have experienced so far, like seriously. 
                            Your services are high class and your environment is supberb ✌😘👏. 
                            {/* My baé 
                            has been worrying to bring her to Ghana, so she can experience your service.
                            Kudos to your exceptional service and meals.                       */}
                                <span>
                                <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src='https://img.freepik.com/premium-psd/psd-girl-with-chestnut-hair-pink-sweater-transparent-background_169196-2302.jpg?w=740' alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Delvi Moon</h2>
                </div>

                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                    <ImQuotesLeft className='Comment-Icon1' />
                                </span>
                            A friend recommend this place to me when I was searching for a venue for a date.
                            You guys are the best😊🥳
                                 <span>
                                    <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src='https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1716799898~exp=1716803498~hmac=a70653ceb69cda274024e990cb54baa615ef7dd4ce5ff691bd1026d88e038ce3&w=740' alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Prince Walker</h2>
                </div>

                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                    <ImQuotesLeft className='Comment-Icon1' />
                                </span>
                            {/* I love your atmosphere, how you guys welcome and receive customers is amazing. 
                            I've never expereince a service as better as your restaurant.  */}
                            Your meals are delicious especially the Apapransa with the crab😍. I kept bitting
                             my tongue until i was done with my meal.                        
                                <span>
                                    <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src='https://img.freepik.com/premium-psd/man-grey-suit-is-holding-laptop_176841-37459.jpg?w=740' alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Jewel Brown</h2>
                </div>
            </Carousel>}  
            <VisibilitySensor partialVisibility={true} onChange={(visible)=>{
                if(visible){
                    setTimeout(()=>{
                        setShowLoader(false);
                        setShowContent(true);
                    },3000)                    
                }
            }} >
                <div style={{height: '100px'}}></div>
            </VisibilitySensor> 

            </div>  
            {/* <div className='MyCommentConty'> */}
                {/* <div className='GiveFeedBack-Image'>
                    <div className='GiveFeedBact-Conty'data-aos= 'fade-right'>
                        <h1 id='FirstFeedBackText1'>Get In Touch</h1>
                        <p id='FirstFeedBackText2'>Find Us Here. Make Real Results Happen.</p>
                        <AiOutlineSmallDash className='SmallDashes-Review'/>
                        <div className='AllStarCommment'>
                            <IoStarSharp  className='StarsReviewConty'/>
                            <IoStarSharp className='StarsReviewConty' />
                            <IoStarSharp className='StarsReviewConty'/>
                            <IoStarSharp className='StarsReviewConty'/>
                            <IoStarSharp className='StarsReviewConty'/>
                        </div>
                        <p id='TrustScore'>
                            Trust Score 4.5 (Based on 1,200 reviews). <br/>
                            Kindly rate and give us a review here
                        </p>
                        👉<button id='MyComment'>Give Review</button>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
        
        </>
    );
}
 
export default RestReviews;
