import React from 'react';
import classes from "./container.module.css"

const container = (props) => {
    const innerContainer = {
        width: '94%',
        height: 'fit-content',
        top: '-110px',
        border: '1px solid #ddd',
        padding: '15px 20px 15px 20px',
        boxShadow: '0px 5px 5px -5px rgba(164,164,164,0.75)',
        borderRadius: '10px'

    }
    const outerContainer = {
        border: '1px solid #aaa', 
        width: '360px', 
        height: '92vh',
        top: '20px',
        borderRadius: '20px'
    }

    let containerStyle = outerContainer;
    if(props.type === 'inner') {
        containerStyle = innerContainer
    }
    return (<div style={containerStyle} className={classes.container}>
        {props.children}
    </div>)

}

export default container