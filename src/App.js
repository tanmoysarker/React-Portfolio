import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Gallery from './components/gallery';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Error from './components/error'
import Blog from './components/blog'
import Projects from './components/projects'

const newRoute = () => {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          {/* <Route path="/gallery" component={Gallery}/> */}
          <Timeline></Timeline>
          <Projects></Projects>
          <Blog></Blog>
        </div>
      </div>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Sidebar/>
        <Switch>
          <Route path="/" component={newRoute} exact/>
          <Route path="/gallery" component={Gallery} />
          <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
