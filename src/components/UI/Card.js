import React from "react";

import './Card.css';

const Card = (props) => {

    // when we use card component the classes we use for it needs to define in this component just so it can be used here too.
    const classes = 'card ' + props.className;

    // console.log(classes);

    return (
        <div className={classes}>{props.children}</div>
    )

}

export default Card;