//evaluation of all actions going on here (type is mandatory bc of it)
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
			return {
				...state,
				items: action.payload
			}
		case NEW_POST:
			return {
				//return only one new item
				...state,
				item: action.payload //single post
			}
		default:
				return state;
	}
}