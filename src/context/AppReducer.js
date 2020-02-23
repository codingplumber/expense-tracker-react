// reducer - how we specify the application state changes in relation to our store / context
// bare minimum we need is a function that takes in state and some kind of action

export default (state, action) => {
    switch(action.type) {
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(x => x.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}
