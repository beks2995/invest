const OPEN_LOGIN = 'OPEN_LOGIN'
const initialState = {
    loginPopup: false,
    regPopup: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LOGIN: {
            return {...state, loginPopup: action.loginPopup}
        }
        default: return state
    }
}