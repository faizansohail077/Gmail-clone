const initialState = {
    sendMessageIsOpen: false
}

const MailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MESSAGE':
            return { sendMessageIsOpen: true }
        case 'CLOSE_MESSAGE':
            return { sendMessageIsOpen: false }
        default:
            return state;
    }

}
export default MailReducer