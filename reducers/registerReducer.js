export const REGISTER_USER = 'REGISTER_USER'

const initialState = []

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            return {
                ...state,
                registerDetails: action.payload
            }

        default: {
            return state;
        }
    }
}
export default registerReducer;