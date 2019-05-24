import { SELECTED_CONTENT, SEARCH_PHRASE } from "../constants/ActionTypes";


const initialState = {
    selected_content: "catalog",
    search_phrase: "",
    test: 2,
    act: true
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CONTENT:
            return {...state,
                selected_content: action.payload};
         case SEARCH_PHRASE:
            return {...state,
                search_phrase: action.payload};

    }

    return state;
}