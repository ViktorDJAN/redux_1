
let initialState = [];
let counter = 0;
// 1
export const inputFieldReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TODO": // take attention on braces
            return [...state, { id: counter++, text: action.payload, completed: false}];
        case "TOGGLE_TODO":
           return state.map(todo =>
            todo.id === action.payload.id ?{...todo,completed: !todo.completed}:todo);

        default:

            return state; // Keep in mind / specifying is obligatory
    }
}

//
// export const addText = (text) => ({type: "ADD_TODO", payload: text});
//
//
