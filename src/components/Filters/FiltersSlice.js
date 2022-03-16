
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
        default:
            return state;
    }
};
export default filtersReducer;