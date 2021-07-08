import React from 'react'
import classes from "./questionCard.module.css"

const Card = (props) => {
    

    return <div className={classes.container}>
        <div className={classes.bullet}></div>
        <p className={classes.question}>{props.question}</p>
    </div>
}

export default Card