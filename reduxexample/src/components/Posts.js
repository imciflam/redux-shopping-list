import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchPosts} from "../actions/postActions"

 class Posts  extends Component
{
	componentDidMount()
	{
		this.props.fetchPosts();
	}
	render(){
		const postItems = this.props.posts.map(post => (
			<div key ={post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p></div>))
		return(
			<div>
			<h1>Posts</h1>
			{postItems}
			</div>
			)
	}
}

const mapStateToProps = state =>({
	posts: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Posts);

//null: map state to props, get the state from redu and map it to component's state