import {FETCH_POSTS, NEW_POST} from "./types";

export function fetchPosts = () => dispatch =>
{ 
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res=>res.json())
			.then(data =>dispatch({
				//object to send through dispatcher
				type: FETCH_POSTS, 
				payload: data, 
			})) 
} 