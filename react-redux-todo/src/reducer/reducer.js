
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...action.data]
        default:
            return state;
    }
};

export default todos
