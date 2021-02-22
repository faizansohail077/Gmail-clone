const initialState = {
    sendMessageIsOpen: false,
    selectedMail: null
}

const MailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MESSAGE':
            return { sendMessageIsOpen: true }
        case 'CLOSE_MESSAGE':
            return { sendMessageIsOpen: false }
        case 'SELECT_MAIL':
            return {

                selectedMail: action.payload

            }
        default:
            return state;
    }

}
export default MailReducer