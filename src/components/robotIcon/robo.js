import React from 'react'
import classes from './robo.module.css'
import img from "./robot.png"

const Robo = () => {
    return <div className={classes.Robo}>
        {/* <i class="fas fa-robot"></i> */}
        <img className={classes.icon} src={img} alt={'icon'}></img>
    </div>
}

export default Robo
