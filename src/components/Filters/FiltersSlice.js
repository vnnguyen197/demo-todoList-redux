/*
const initialState = {
    search: '',
    status: 'ALL',
    prioriry: []
}
const filtersReducer = (state = initialState, action) => {
    // console.log({ state, action });
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload,
            };
            case 'filters/statusFilterChange':
                return {
                    ...state,
                    status: action.payload
                }

            case 'filters/prioriryFilterChange':
                return {
                    ...state,
                    prioriry: action.payload
                }
        default:
            return state;
    }
};
export default filtersReducer;
*/
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        prioriry: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            //mutaion || IMMER
            state.search = action.payload;
        }, // => {type: 'filters/searchFilterChange' }
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioriryFilterChange: (state, action) => {
            state.prioriry = action.payload;
        }
    }
}); 