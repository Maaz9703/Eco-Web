const cartState = {
    cartItems: [],
    totalPrice: 0,
};

const cartReducer = (state: any = cartState, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const inCart = state.cartItems.find(
                (item: any) => item.id === action.payload.item.id
            );

            if (inCart) {
                return {
                    ...state, // Copy state
                    cartItems: state.cartItems.map((item: any) =>
                        item.id === action.payload.item.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    totalPrice: state.totalPrice + action.payload.item.price, // Add price
                };
            } else {
                return {
                    ...state, // Copy state
                    cartItems: [...state.cartItems, action.payload.item], // Add item
                    totalPrice: state.totalPrice + action.payload.item.price, // Add price
                };
            }

        case "REMOVE_FROM_CART":
            if (action.payload.item.quantity == 1) {
                return {
                    ...state, // Copy state
                    cartItems: state.cartItems.filter(
                        (item: any) => item.id !== action.payload.item.id
                    ),
                    totalPrice: state.totalPrice - action.payload.item.price, // Remove price
                };
            } else {
                return {
                    ...state, // Copy state
                    cartItems: state.cartItems.map((item: any) =>
                        item.id === action.payload.item.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                    totalPrice: state.totalPrice - action.payload.item.price, // Remove price
                };
            }

        default:
            return state;
    }
};

export default cartReducer;
