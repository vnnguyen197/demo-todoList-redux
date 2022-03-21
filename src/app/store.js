
import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../Components/todoList/TodoListSlice';

const rootReducer = {
    todo: todoListReducer,
}
const store = configureStore({
    reducer: rootReducer,
})

export default store;