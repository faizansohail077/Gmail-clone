import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './SendMail.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeMessage } from '../../features/Actions/Action'

const SendMail = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit1 = (data) => {
        console.log('this is', data)
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit1)} >
                <input name="to" placeholder="To" type="text" ref={register({ required: true })} />
                {errors.to && <p className="sendMail__error">Must</p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                {errors.subject && <p className="sendMail__error">Must</p>}
                <input name="message" className="sendMail__message" placeholder="Message" type="text" ref={register({ required: true })} />
                {errors.message && <p className="sendMail__error">Must</p>}
                <div className="sendMail__option">
                    <Button className="sendMail__send">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
