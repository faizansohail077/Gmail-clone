import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './SendMail.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeMessage } from '../../features/Actions/Action'
import { db } from '../../firebase'
import firebase from 'firebase'

const SendMail = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm()

    const submit = (formData) => {
        console.log('this is', formData)
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeMessage())
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeMessage())} className="sendMail__close" />
            </div>
            <form >
                <input name="to" placeholder="to" type="text" ref={register({ required: true })} />
                {errors.to && <p className="sendMail__error">Text Field Required</p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                {errors.subject && <p className="sendMail__error">Email Required</p>}
                <input name="message" className="sendMail__message" placeholder="Message" type="text" ref={register({ required: true })} />
                {errors.message && <p className="sendMail__error">Message Required</p>}
                <div className="sendMail__option">
                    <Button onClick={handleSubmit(submit)} className="sendMail__send">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
