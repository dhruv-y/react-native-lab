const initialState = {
    registerDetails: {
        fname: "",
        lname: "",
        email: "",
        password: "",
    }
};
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_REGISTER_DETAILS": {
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