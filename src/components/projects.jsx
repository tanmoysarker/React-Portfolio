import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/stock.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">A Mobile application</a></h3>
											<span>This is a mobile application where you can scan product and manage the import and export quantity of a company.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/movit.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">A Mobile Application</a></h3>
											<span>This is a ride booking mobile application for the purpose of packing and shifting of house or offices.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/4d.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">A Mobile Application</a></h3>
											<span>A mobile application for showing draw result of lucky draw of different companies of Malaysia. It is already available on google play store.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/weta.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">A Mobile Application</a></h3>
											<span>This is an app where you can find nearest wedding planning services available and book different services through this.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/movit-web.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">A Web Application</a></h3>
											<span>This is the web version for the pack and shift ride sharing service. This is basically for the user part where user can book their ride according to need.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/crud.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">A Web Application</a></h3>
											<span>This is a portal for sharing content for everyone with the help of social authentication.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><button className="btn btn-primary btn-lg btn-load-more">To be continued... </button></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
