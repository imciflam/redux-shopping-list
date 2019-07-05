//evaluation of all action going on here
import {FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
	items: [], //posts from action where there's a fetch req
	item: {} //single post
}

export default function(state=initialState, action)
{
	switch(action.type)
	{
		case FETCH_POSTS:
		case NEW_POST:
		default:
				return state;
	}
}