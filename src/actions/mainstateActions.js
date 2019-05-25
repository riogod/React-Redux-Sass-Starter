// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { SELECTED_CONTENT, SEARCH_PHRASE, SET_CURRENT_CATEGORY_ID } from "../constants/ActionTypes";

export function setViewContent(payload) {
  console.log(SELECTED_CONTENT);
  return {
    type: SELECTED_CONTENT,
    payload: payload
  };
}

export function setSearchPhrase(payload) {
  console.log(SEARCH_PHRASE);
  return {
    type: SEARCH_PHRASE,
    payload: payload
  };
}

export function setCurrentCategory(payload) {
  console.log(SET_CURRENT_CATEGORY_ID);
  return {
    type: SET_CURRENT_CATEGORY_ID,
    payload: payload
  };
}