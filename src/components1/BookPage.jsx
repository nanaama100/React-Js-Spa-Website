import React from 'react';
import './BookPage.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState} from 'react';
import axios from 'axios'


function BookPage() {

  return (
    <div className='BigBookContainer'>
        <div>
            <h2 id='SpaHeading'>BOOK A SESSION</h2>
            <img src='/public/Images/BackgroundNew1.jpg' alt='' className='AboutBackgroundImage'/>
      </div>
	  <h4 id='FormyBodyText'>BOOKING FORM</h4>
      <div className='FormSection'>
      <div class="container BookingInfoConty">
		<div class="row">
			<div class="col-xl-12">
				
				<div class="multistep-container">
					
					<div class="mutistep-form-area">
						
						{/* <!--  --> */}
								<div class="form-box">

								{/* <!--  --> */}
									<ul class="active-button">
										<li class="active">
											<span class="round-btn">1</span>
										</li>
										<li>
											<span class="round-btn">2</span>
										</li>
										<li>
											<span class="round-btn">3</span>
										</li>
									</ul>
								{/* <!--  --> */}


										<h4 id='FormTextHead'>Personal Details</h4>
										<form action="" className='FormsBook'>			
											<div class="form-group">
												<label for="">First Name</label>
												<input type="text" name="FirstName" placeholder="First Name" id="" class="form-control"  />
											</div>
											<div class="form-group">
												<label for="">Last Name</label>
												<input type="text" name="LastName" placeholder="Last Name" id="" class="form-control" />
											</div>
											<div class="form-group">
												<label for="">Date Of Birth</label>
												<input type="date" name="Birth_Date"  id="" class="form-control"/>
											</div>

											<div class="form-group">
												<label for="">Gender</label>
												<select class="custom-select myinput" name="Gender" id="class">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
											</div>

											<div class="button-row">
												<input type="button" value="Next" class="next" id='FormButtonsBig2'/>
											</div>
											
										</form>

								</div>
								{/* <!--  --> */}

								{/* <!--  --> */}
								<div class="form-box">

								{/* <!--  --> */}
									<ul class="active-button">
										<li class="active">
											<span class="round-btn">1</span>
										</li>
										<li class="active">
											<span class="round-btn">2</span>
										</li>
										<li>
											<span class="round-btn">3</span>
										</li>
									</ul>
								{/* <!--  --> */}
									
										<h4 id="FormTextHead">Contact Detail</h4>
										<form action="" className='FormsBook'>											
											<div class="form-group" >
												<label for="">Email</label>
												<input type="email" name="Email" placeholder="Email" id="" class="form-control" />
											</div>
											<div class="form-group">
												<label for="">Phone</label>
												<input type="text" name="Phone" placeholder="Phone" id="" class="form-control" />
											</div>
											<div class="form-group">
												<label for="">Address1</label>
												<input type="text" name="Address" placeholder="Address1" id="" class="form-control" />
											</div>

											<div class="form-group">
												<label for="">Address2</label>
												<input type="text" name="" placeholder="Address2" id="" class="form-control"/>
											</div>


											<div class="button-row">
												<input type="button" value="Previous" class="previous" id='FormButtonsBig1'/>
												<input type="button" value="Next" class="next" id='FormButtonsBig2'/>
											</div>											
										</form>

								</div>
								{/* <!--  --> */}

								{/* <!--  --> */}
								<div class="form-box">


								{/* <!--  --> */}
									<ul class="active-button">
										<li class="active">
											<span class="round-btn">1</span>
										</li>
										<li class="active">
											<span class="round-btn">2</span>
										</li>
										<li class="active">
											<span class="round-btn">3</span>
										</li>
									</ul>
								{/* <!--  --> */}

										<h4 id='FormTextHead'>SERVICE DETAILS</h4>
										<form action="" className='FormsBook'>
											<div class="form-group">
												<label for="dropdown">Number of Persons</label>
												<select class="custom-select myinput" name="NumberPersons" id="">
													<option selected disabled value=''>--Select--</option>
                                                    <option value="option 1">1</option>
                                                    <option value="option 2">2</option>
                                                    <option value="option 3">3</option>
                                                </select>
											</div>
											<div class="form-group">
												<label for="dropdown">Service1 (Massage)</label>
												<select class="custom-select myinput" name="Service1" id="">
													<option selected disabled value=''>--Select--</option>
                                                    <option value="option 1">None</option>
                                                    <option value="option 1">Swedish Relax Massage</option>
                                                    <option value="option 2">Couple's Massage</option>
                                                    <option value="option 3">Hot Stone Massage</option>
                                                    <option value="option 4">Four Hands Massage</option>
                                                    <option value="option 5">Facial Massage</option>
                                                    <option value="option 6">Stretching Massage</option>
                                                    <option value="option 7">Cupping Massage</option>
                                                    <option value="option 8">Six Hands Massage</option>
                                                    <option value="option 10">Aromatherapy Massage</option>
                                                    <option value="option 11">Lomi Lomi Massage</option>
                                                    <option value="option 12">Bamboo Massage</option>
                                                </select>
											</div>
											<div class="form-group">
												<label for="dropdown">Service2 (Therapy)</label>
												<select class="custom-select myinput" name="Service2" id="" >
													<option selected disabled value=''>--Select--</option>
                                                    <option value="option 1">None</option>
                                                    <option value="option 1">Brain Relaxation</option>
                                                    <option value="option 2">Facial Release</option>
                                                    <option value="option 3">Fut Injection</option>
                                                    <option value="option 4">Inner Self Call</option>
                                                    <option value="option 5">Brain Release for the Aged</option>
                                                    <option value="option 6">Japanese Acupuncture</option>
                                                </select>
											</div>
											<div class="form-group">
												<label for="dropdown">Service3 (Therapy)</label>
												<select class="custom-select myinput" name="Service3" id="" >
													<option selected disabled value=''>--Select--</option>
                                                    <option value="option 1">None</option>
                                                    <option value="option 1">Herbal Spa Bags Treatment</option>
                                                    <option value="option 2">Mud Body Treatment</option>
                                                    <option value="option 3">Salt Body Treatment</option>
                                                    <option value="option 4">Facial Treatment</option>
                                                    <option value="option 5">Back Treatment</option>
                                                </select>
											</div>
											<div class="form-group">
												<label for="">Duration</label>
												<select class="custom-select myinput" name="Duration" id="" style={{cursor: 'pointer'}}>
													<option selected disabled value=''>--Select--</option>
                                                    <option value="option 1">30 minutes</option>
                                                    <option value="option 2">1 hour</option>
                                                    <option value="option 3">1 hour 30minutes</option>
                                                    <option value="option 3">2 hours</option>
                                                </select>
											</div>
											<div class="form-group">
												<label for="">Date</label>
												<input type="date" name="BookingDate" placeholder="dd/mm/yy" id="" class="Date_of_Session" />
											</div>
											<div class="form-group">
												<label for="">Time Schedule</label>
												<input type="time" name="TimeSchedule" placeholder="" id="" class="Time_Schedule" />
											</div>
											<div class="button-row">
												<input type="button" value="Previous" class="previous" id='FormButtonsBig1' />
												<input type="submit" value="Submit" class="submit" id='FormButtonsBig2'/>
											</div>										
										</form>

								</div>
								{/* <!--  --> */}

					</div>

				</div>

			</div>
		</div>
	</div>

      </div>
    </div>
  )
}

export default BookPage;