import { v4 as uuidv4 } from 'uuid';


const initialState = {
    todos: [
        {
            id: uuidv4(),
            title: 'First todo',
            done: true,
        }, {
            id: uuidv4(),
            title: 'Second todo',
            done: false,
        }
    ]
};

const todo = (state = initialState, action) => {
 switch (action.type) {
     case 'ADD_TODO' :
         return {
             ...state,
             todos: [...state.todos, {title: action.payload, done: true, id: uuidv4()}]
         };
     case 'DELETE_TODO':
         const updateDeleteTask = state.todos.filter(el => el.id !== action.payload);
         return {
             ...state,
             todos: updateDeleteTask
         };
     case 'DONE_TODO':
        return {
            ...state,
            todos: state.todos.map(el => {
                if(el.id === action.payload) return {...el, done: !el.done}
                return el
            })
        }
     default:
         return state;
 }
};

export default todo;

// const updateDoneTask = state.todos.map(el => {
//     if(el.done === action.payload) return {...el, done: !action.payload}
//     return el
// })
// return {
//     ...state,
//     todos: updateDoneTask
// }