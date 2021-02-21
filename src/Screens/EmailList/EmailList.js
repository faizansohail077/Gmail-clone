import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import EmailRow from './component/EmailRow/EmailRow'
import Section from './component/Section/Section'
import './EmailList.css'
const EmailList = () => {
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
                <EmailRow title="Twitch" subject="Hello Everyone" description="this is Gmail" time="10pm" />
                <EmailRow title="Twitch" subject="Hello Everyone" description="this is Gmail" time="10pm" />
                <EmailRow title="Twitch" subject="Hello Everyone" description="this is Gmail" time="10pm" />
                <EmailRow title="Twitch" subject="Hello Everyone" description="this is Gmail" time="10pm" />
                <EmailRow title="Twitch" subject="Hello Everyone" description="this is Gmail" time="10pm" />
                <EmailRow title="Twitch" subject="Hello Everyone" description="this is Gmail" time="10pm" />
            </div>
        </div>
    )
}

export default EmailList
