import {FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = () => dispatch =>
{ 
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res=>res.json())
			.then(posts =>
				dispatch({
				//object to send through dispatcher
				type: FETCH_POSTS, 
				payload: posts, 
			})) 
}

export const createPost = (postData) => dispatch =>
{ 
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(postData)
		})
		.then(res=>res.json())
		.then(postData =>
			dispatch({
				//object to send through dispatcher
				type: NEW_POST, 
				payload: postData, 
			}))
} 