import React, { Component } from 'react'
import { database } from '../firebaseConfig'

export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  title : '',
		  title1 : '',
		  body:'',
		  notes: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	  }
	
	  handleChange(e){
		this.setState({
		  [e.target.name] : e.target.value
		})
	  }
	  handleSubmit(e){
		e.preventDefault();
		const note = {
			name: this.state.title,
			email: this.state.title1,
			comment: this.state.body
		}
		database.push(note);
		this.setState({
			title: '',
			title1 : '',
			body:'',
		  });
	  }
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Visitor</span>
								<h2 className="colorlib-heading">Suggestion Box</h2>
							</div>
						</div>
						<form className="comment-form form-group" onSubmit={this.handleSubmit} style={{ width: '700px', float: 'inherit' }}>
							<div className="input-group">
								<span className="input-group-addon">Name</span>
								<input 
								  onChange = {this.handleChange}
								  value ={this.state.title}
								  type="text" 
								  name="title" 
								  className="form-control no-border"
								  placeholder="Type your name..." 
								  />
							</div>
							<div className="input-group" style={{paddingTop:20}}>
								<span className="input-group-addon">Email</span>
								<input
									onChange = {this.handleChange}
									value ={this.state.title1}
									type="text" 
									name="title1" 
									className="form-control no-border"
									placeholder="Type your email..." 
									/>
							</div>
							<div className="input-group" style={{paddingTop:20,paddingBottom:20}}>
								<span className="input-group-addon">Comment</span>
								<input 
									onChange = {this.handleChange}
									value ={this.state.body}
									type="text" 
									name="body" 
									className="form-control no-border"
									placeholder="Say something..." 
									/>
							</div>
							<input type="submit" value="Post" className="btn btn-primary"/>
						</form>
					</div>
				</section>
			</div>
		)
	}
}
