import React from 'react'
import classes from "./header.module.css"
const header = (props) => {
    return (<div className={classes.header}>
        <h2 className={classes.heading}>IRIS</h2>
        <h4 className={classes.subHeading}>Hello</h4>
        <p className={classes.para}>I am Iris, a virtual assistant.</p>
        <p className={classes.para}>How may I help you?</p>
    </div>)
}

export default header