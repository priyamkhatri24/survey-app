import React from 'react'
import classes from "./frequentlyAsked.module.css"

const frequentlyAsked = () => {
    return <div className={classes.container}>
        <p className={classes.mainLine}>Frequently asked questions</p>
        <span className={classes.questionMark}>?</span>
    </div>
}

export default frequentlyAsked