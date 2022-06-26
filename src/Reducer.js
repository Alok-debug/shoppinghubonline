export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket.reduce((sum, item) => {return(sum = sum + item.price)}, 0);
    
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
    }
};

export default reducer;