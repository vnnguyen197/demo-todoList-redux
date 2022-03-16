
const initialState = {
    filters: {
        search: '',
        status: 'ALL',
        prioriry: []
    },
    todoList: [
        { id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, prioriry: 'Hight' },
        { id: 3, name: 'Learn JavaScript', completed: false, prioriry: 'Low' },
    ]
}
const rootReducer = (state = initialState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/searchFilterChange':
            return{
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload
                }
            }
        default:

            return state;

    }
}
export default rootReducer;