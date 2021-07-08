import React from 'react'
import classes from "./Footer.module.css"
const Footer = () => {
    return <div className={classes.Footer}>
        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
        <p className={classes.footerPara}>Start a New Conversation</p>
    </div>
}

export default Footer