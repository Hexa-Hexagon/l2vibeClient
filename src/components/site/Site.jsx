import React from "react";
import classes from "./site.module.scss";

const Site = ({...props}) => {

    return (
        <a className={classes.site} href={props.site.serverName}>
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
                    <h2 className={classes.nameSite}>{props.site.serverName.includes(
                        "//") ? String(
                        props.site.serverName.split("//")[1])
                        .split(".")[0] : props.site.serverName}</h2>
                    <p className={classes.difficulty}>x{props.site.difficulty}</p>
                    <p className={classes.version}>{props.site.version}</p>
                    <p className={classes.date}>{props.site.dateOfStartingServer.split("T")[0]}</p>
                </div>
            </div>
            <div className={classes.triangleDown}/>
        </a>
    );
};

export default Site;