import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPriorirySelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

/*export const todoListSelector = (state)=>{
    const searchText = searchTextSelector(state);
}
export const todoListSelector = (state) => {
    const todosRemaining = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search);
    });
    return todosRemaining;
};
export const searchTextSelector = (state) => state.filters.search;
*/

export const todosRemainingSelector =createSelector (
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPriorirySelector,
    (todoList, status, searchText, priorities) => {
        console.log({status});
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                 ? todo.name.includes(searchText) && priorities.includes(todo.prioriry) 
                 : todo.name.includes(searchText);
            }

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) && 
                (priorities.length ? priorities.includes(todo.prioriry) : true));
        });
    }
);
