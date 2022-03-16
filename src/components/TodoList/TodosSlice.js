
const initialState = [
    { id: 1, name: 'Learn Python', completed: false, prioriry: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, prioriry: 'Hight' },
    { id: 3, name: 'Learn JavaScript', completed: false, prioriry: 'Low' },
    { id: 4, name: 'Learn PHP', completed: false, prioriry: 'Hight' },
    { id: 5, name: 'Learn C/C++', completed: false, prioriry: 'Low' },
];

const todoListReducer = (state = initialState, action) => {
    // console.log({ state, action });
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
export default todoListReducer;