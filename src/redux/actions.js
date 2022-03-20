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

export const statusFilterChange = (status) =>{
    return {
        type: 'filters/statusFilterChange',
        payload: status,
    };
}
export const prioriryFilterChange = (prioriry) =>{
    return {
        type: 'filters/prioriryFilterChange',
        payload: prioriry,
    };
}
export const toggleTodoStatus = () =>{
    return {
        type: 'todoList/toggleTodoStatus',
    };
}

//action createors => function