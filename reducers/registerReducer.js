const initialState = {
    registerDetails: {
        email: "", password: "", fname: "", lname: ""
    }
};
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_REGISTER_DETAIL": {
            return {
                ...state,
                registerDetails: action.registerDetails

            }
        }
        default: {
            return state;
        }
    }
}
export default registerReducer;