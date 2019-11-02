import React, { Component } from 'react'
import Sidebar from './sidebar'
import '../App.css';
import { withRouter } from 'react-router'

class Gallery extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                <Sidebar/>
                    <div id="colorlib-main">
                        <h1>Gallery</h1>
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(Gallery)