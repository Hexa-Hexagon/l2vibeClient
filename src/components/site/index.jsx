import React, { useState } from 'react';

const Site = (props) => {
    
    return (
        <div style={{border:"2px solid black"}}>
            <h3>{props.name}</h3>
            <p>{props.status}</p>
            <p>x{props.difficulty}</p>
            <p>{props.version}</p>
            <p>{props.dateOfStart}</p>
            <p>{props.dateOfEnd}</p>       
        </div>
    );
};

export default Site;