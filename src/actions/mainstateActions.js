// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { SELECTED_CONTENT, SEARCH_PHRASE } from "../constants/ActionTypes";

export function setViewContent(payload) {

  return {
    type: SELECTED_CONTENT,
    payload: payload
  };
}

export function setSearchPhrase(payload) {

  return {
    type: SEARCH_PHRASE,
    payload: payload
  };
}