export const openMessage = () => {
    return {
        type: "OPEN_MESSAGE"
    }

}
export const closeMessage = () => {
    return {
        type: "CLOSE_MESSAGE"
    }
}

export const selectedmail = (payload) => {
    return {
        type: 'SELECT_MAIL',
        payload
    }
}

