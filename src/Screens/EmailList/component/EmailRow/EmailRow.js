import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectedmail } from '../../../../features/Actions/Action'
import './EmailRow.css'
const EmailRow = ({ id, title, subject, description, time }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch({ type: 'SELECT_MAIL', payload: ({ id, title, subject, description, time }) })
        history.push("/mail")

    }
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <h4>{subject}-
                    <span className="emailRow__description">
                        {description}
                    </span>
                </h4>
            </div>
            <div className="emailRow__time">
                {time}

            </div>
        </div>
    )
}

export default EmailRow
