import React from 'react';
import classes from './index.module.scss';
const Site = (props) => {
    
    return (
        <a className={classes.site}  href={`http://${props.site.nameSite}`}>
            <div className={classes.triangleUp} />
            <div className={classes.center}>
            {props.site.status==="King VIP"? <div className={classes.imageStatusKingVip} /> : props.site.status==="Super VIP"? <div className={classes.imageStatusSuperVip} /> : props.site.status==="VIP"? <div className={classes.imageStatusVip} />:<div className={classes.imageStatusPremiumStandart} />}
            <p className={classes.nameSite}>{props.site.nameSite}</p>
            <p className={classes.difficulty}>x{props.site.difficulty}</p>
            <p className={classes.version}>{props.site.version}</p>
            <p className={classes.date}>{props.site.dateOfStartingServer}</p>
            </div>
            <div className={classes.triangleDown} />
        </a>
    );
};

export default Site;