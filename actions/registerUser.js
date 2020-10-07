export const registerUser = (registerDetails) => (
    {
        type: "SAVE_REGISTER_DETAILS",
        registerDetails: {
            fname: registerDetails.fname,
            lname: registerDetails.lname,
            email: registerDetails.email,
            password: registerDetails.password,
        }
    });