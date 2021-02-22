import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { selectedmail } from '../../features/Actions/Action'
import { db } from '../../firebase'
import EmailRow from './component/EmailRow/EmailRow'
import Section from './component/Section/Section'
import './EmailList.css'
const EmailList = () => {
    const [emails, setEmail] = useState([])
    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => setEmail(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, [])

    console.log('this is email', emails)
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>

                    <IconButton>
                        <ChevronRight />
                    </IconButton>

                    <IconButton>
                        <KeyboardHide />
                    </IconButton>

                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={Inbox} title="Primary" color="red" selected />
                <Section Icon={People} title="Social" color="blue" />
                <Section Icon={LocalOffer} title="Promotios" color="green" />
            </div>
            <div className="emailList_lists">
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
                ))}








            </div>
        </div>
    )
}

export default EmailList
