import React from "react";
import classes from "./site.module.scss";

const Site = ({...props}) => {

    return (
        <a className={classes.site} href={`https://${props.site.nameSite}`}>
            <div className={classes.triangleUp}/>
            <div className={classes.center}>
                <div className={classes.infoBlock}>
                    {props.site.status === "King VIP" ? <div
                        className={classes.imageStatusKingVip}/> : props.site.status === "Super VIP" ?
                        <div
                            className={classes.imageStatusSuperVip}/> : props.site.status === "VIP" ?
                            <div
                                className={classes.imageStatusVip}/> : props.site.status === "Premium" ?
                                <div className={classes.imageStatusPremium}/> :
                                <div className={classes.imageStatusStandart}/>
                    }
                    <p className={classes.nameSite}>{props.site.nameSite.split(".")[0]}</p>
                    <p className={classes.difficulty}>x{props.site.difficulty}</p>
                    <p className={classes.version}>{props.site.version}</p>
                    <p className={classes.date}>{props.site.dateOfStartingServer}</p>
                </div>
            </div>
            <div className={classes.triangleDown}/>
        </a>
    );
};

export default Site;