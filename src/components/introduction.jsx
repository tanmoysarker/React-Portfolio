import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/blank.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Tanmoy.</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1iEkSpwmJaK987DvUQKU100onAOVNjEl9/view" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/blank.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Here's some of my<br />Github projects !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/tanmoysarker" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/img-5.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Also some<br/>Bitbucket projects ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://bitbucket.org/tanmoy749/" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
