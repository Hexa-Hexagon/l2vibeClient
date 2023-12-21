import React from "react";
import classes from "../../app.module.scss";
import ThisWeek from "../startingThisWeek/StartingThisWeek";
import ThisMonth from "../startingThisMonth/StartingThisMonth";
import Later from "../startsLater/StartsLater";
import JustOpened from "../justOpened/JustOpened";
import Started from "../started/Started";
import BonusStarted from "../bonusStarted/BonusStarted";
import accept from "../../images/acccept.png";

const Main = ({...props}) => {
    return (
        <main className={classes.main}>
            {/*<div className={classes.mainServers}>*/}
            {/*    <div className={classes.leftBlock}>*/}
            {/*        <ThisWeek*/}
            {/*            sites={props.startingThisWeek}*/}
            {/*            starting={props.selectLan.StartingThisWeek}*/}
            {/*        />*/}
            {/*        <ThisMonth*/}
            {/*            sites={props.startingThisMonth}*/}
            {/*            starting={props.selectLan.StartingThisMonth}*/}
            {/*        />*/}
            {/*        <Later*/}
            {/*            sites={props.startsLater}*/}
            {/*            starting={props.selectLan.StartsLater}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={classes.rightBlock}>*/}
            {/*        <JustOpened*/}
            {/*            sites={props.justOpened}*/}
            {/*            starting={props.selectLan.JustOpened}*/}
            {/*        />*/}
            {/*        <Started*/}
            {/*            sites={props.started}*/}
            {/*            starting={props.selectLan.Started}*/}
            {/*        />*/}
            {/*        <BonusStarted*/}
            {/*            sites={props.bonusStarted}*/}
            {/*            starting={props.selectLan.BonusStarted}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={classes.bannerMain}>*/}
            {/*    {*/}
            {/*        props.banners.map(*/}
            {/*            banner => <a href={banner.link} key={banner._id}><input*/}
            {/*                type="image" src={banner.banner}*/}
            {/*                className={classes.bannerImage} alt="banner"/></a>)*/}
            {/*    }*/}
            {/*</div>*/}
            <div className={classes.statements}>

                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfsdfsdfsdfsdfssfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>


            </div>
        </main>
    );
};

export default Main;