const OPEN_LOGIN = 'OPEN_LOGIN'
const OPEN_REG = 'OPEN_REG'
const CLOSE_AUTH_POPUP = 'CLOSE_AUTH_POPUP'
const initialState = {
    loginPopup: false,
    regPopup: false,
    authFormOverlay: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LOGIN: {
            return {...state, loginPopup: true, authFormOverlay: true}
        }
        case OPEN_REG: {
            return {...state, regPopup: true, authFormOverlay: true}
        }
        case CLOSE_AUTH_POPUP: {
            return {...state, loginPopup: false, regPopup: false, authFormOverlay: false}
        }
        default: return state
    }
}
export const closeAuthPopup = () => {
    return {type: CLOSE_AUTH_POPUP}
};
export const openLoginForm = () => {
    return {type: OPEN_LOGIN}
};
export const openRegForm = () => {
    return {type: OPEN_REG}
};
