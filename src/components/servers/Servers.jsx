import React from "react";
import classes from "../../app.module.scss";
import ThisWeek from "../startingThisWeek/StartingThisWeek";
import ThisMonth from "../justOpened/JustOpened";
import Later from "../startsLater/StartsLater";
import JustOpened from "../justOpened/JustOpened";
import BonusStarted from "../bonusStarted/BonusStarted";
import Started from "../started/Started";
import {Link} from "react-router-dom";

const Servers = ({ ...props }) => {
    return (
        <>
            <div className={classes.mainServers}>
                <div className={classes.leftBlock}>
                    <ThisWeek
                        sites={props.startingThisWeek}
                        starting={props.selectLan.StartingThisWeek}
                    />
                    <ThisMonth
                        sites={props.startingThisMonth}
                        starting={props.selectLan.StartingThisMonth}
                    />
                    <Later
                        sites={props.startsLater}
                        starting={props.selectLan.StartsLater}
                    />
                </div>
                <div className={classes.rightBlock}>
                    <JustOpened
                        sites={props.justOpened}
                        starting={props.selectLan.JustOpened}
                    />
                    <Started
                        sites={props.started}
                        starting={props.selectLan.Started}
                    />
                    <BonusStarted
                        sites={props.bonusStarted}
                        starting={props.selectLan.BonusStarted}
                    />
                </div>
            </div>
            <div className={classes.bannerMain}>
                {
                    props.banners.map(banner => <Link key={banner._id} to={banner.bannerLink}>
                            <input type="image" src={`http://localhost:5000/banners/images/${banner.bannerFileName}`}
                            className={classes.bannerImage} alt="banner"/></Link>)
                }
            </div>
        </>
    );
};

export default Servers;