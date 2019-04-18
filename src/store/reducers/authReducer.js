const initState = {
    authError: null
}

// populates the 'auth' property inside of the rootReducer
const authReducer = (state = initState, action) => {
    // check for which action type is dispatched
    switch(action.type) {
        case 'LOGIN_ERROR':
        console.log('Login Error');
            // if login error exists, update initState to 'Login Failed'
            return {
                ...state,
                authError: 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            // if login success, set initState back to null
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('Signup Successful')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('Signup Error');
            return {
                ...state,
                authError: action.err.message
            }
            
        default:
            return state;
    }
}

export default authReducer