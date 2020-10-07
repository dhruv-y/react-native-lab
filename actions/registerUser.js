export const registerUser = (registerDetails) => (
    {
        type: "SAVE_REGISTER_DETAIL",
        registerDetails: {
            fname: registerDetails.fname,
            lname: registerDetails.lname,
            email: registerDetails.email,
            password: registerDetails.password,
        }
    });