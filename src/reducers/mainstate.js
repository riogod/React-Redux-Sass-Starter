import { SELECTED_CONTENT, SEARCH_PHRASE, SET_CURRENT_CATEGORY_ID, SET_CATEGORY_PARENTS } from "../constants/ActionTypes";


const initialState = {
    selected_content: "catalog",
    search_phrase: "",
    current_category_id: 0,
    category_parent_list: null
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CONTENT:
            return {...state,
                selected_content: action.payload};
         case SEARCH_PHRASE:
            return {...state,
                search_phrase: action.payload};
         case SET_CURRENT_CATEGORY_ID:
            return {...state,
                current_category_id: action.payload};
         case SET_CATEGORY_PARENTS:
            return {...state,
                category_parent_list: action.payload};

    }
    // console.log("State init");
    return state;
}