import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mobile Application Developer at Aalpin Digital and working on project of (Bisly, Estonia) <span>October 2021 - Present</span></h2>
                        <p>In Bisly, my job is to work on their home automation mobile application in which i need to make sure that proper UI/UX is being used, maintain request load balancing to the server as data is transferred through Socket here as no API is being used, troubleshoot and debug to optimize performance, planning new features and the project architecture and also improve the app as much as possible with the latest best practices of React Native. </p> 
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>React Native Developer at WeDevs <span>Jan 2020 - October 2021</span></h2>
                        <p>I have joined WeDevs as a React Native Developer and i have worked with the mobile application of their flagship plugin Dokan which is a multivendor E-commerce plugin having more than 70,000 active users all over the country. I have been involved since the beginning of building Dokan multivendor app for both Android and IOS. I have been able to complete the app and shipped to more than 150 business owners their custom Dokan app using CI/CD automation with fastlane. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      
                      <div className="timeline-label">
                        <h2>Front-End Developer at 41Technologies <span>Jan 2018- Jan 2020</span></h2>
                        <p>I have joined 41Technologies as a Front-End Developer after completing my graduation. My major part of the work has been into the field of creating user friendly mobile and web applications. I am also exploring the role of a back-end developer by doing database works and creating api's in graphql and node js.</p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduation from Sharda University, India <span>2013-2017</span></h2>
                        <p>I have completed my under-graduation studies with major in IT(Information Technology). I have taken courses like Data Structure & Algorithms, Database design & development, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>1998-2012</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with distinction marks. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
