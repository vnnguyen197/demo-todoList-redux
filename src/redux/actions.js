// export const addTodoAction {
//     type:'todoList/addTodo' ,
//     payload:  { id: 5, name: 'Learn Footbal', completed: false, prioriry: 'Medium' }
// }
// const ADD_TOD=


export const addTodo = (data) =>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}


export const searchFilterChange = (text) =>{
    return{
        type: 'filters/searchFilterChange',
        payload: text 
    }
}
//action createors => function