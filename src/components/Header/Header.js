import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton, Avatar } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://freepngimg.com/thumb/gmail/66569-suite-google-contacts-email-gmail-png-file-hd-thumb.png" alt="logo" />
                <span>Gmail</span>

            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Enter Your Mail" />
                <ArrowDropDown />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
