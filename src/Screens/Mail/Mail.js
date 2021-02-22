import React from 'react'
import { ArrowBack, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import './Mail.css'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectedmail } from '../../features/Actions/Action'
const Mail = () => {
    const history = useHistory()
    const value = useSelector(state => state.MailReducer)
    console.log('tjos os vale', value)
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedmail?.subject}</h2>
                    <LabelImportant className="mail__important" />
                    <p>{selectedmail?.title}</p>
                    <div className="mail__time">
                        <p>{selectedmail?.ttime}</p>

                    </div>
                </div>
                <div className="mail__message">
                    <p>{selectedmail?.message}</p>
                </div>

            </div>

        </div>
    )
}

export default Mail
