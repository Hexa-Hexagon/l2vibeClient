import React from "react";
import classes from "../../app.module.scss";
import ThisWeek from "../startingThisWeek/StartingThisWeek";
import ThisMonth from "../startingThisMonth/StartingThisMonth";
import Later from "../startsLater/StartsLater";
import JustOpened from "../justOpened/JustOpened";
import Started from "../started/Started";
import BonusStarted from "../bonusStarted/BonusStarted";
import Servers from "../servers/Servers";
import {Link, Route, Routes} from "react-router-dom";
import MainStatements from "../mainStatements/MainStatements";
import StatementText from "../statementText/StatementText";
import EditStatements from "../editStatements/EditStatements";

const Main = ({...props}) => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/" element={
                    <Servers
                        startingThisWeek={props.startingThisWeek}
                        selectLan={props.selectLan}
                        startingThisMonth={props.startingThisMonth}
                        startsLater={props.startsLater}
                        justOpened={props.justOpened}
                        started={props.started}
                        bonusStarted={props.bonusStarted}
                        banners={props.banners}
                    />}/>
                <Route path="/statements" element={
                    <MainStatements articles={props.articles} setStatements={props.setStatements}
                                    statements={props.statements}/>
                }/>
                <Route path="/statements/:id" element={
                    <StatementText articles={props.articles}/>
                }/>


            </Routes>
        </main>
    );
};

export default Main;