import React from "react";
import classes from "../../app.module.scss";
import Servers from "../servers/Servers";
import { Route, Routes } from "react-router-dom";
import MainStatements from "../mainStatements/MainStatements";
import StatementText from "../statementText/StatementText";

const Main = ({ ...props }) => {
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
                        superVip={props.superVip}
                        setSuperVip={props.setSuperVip}
                        vip={props.vip}
                        setVip={props.setVip}
                        premium={props.premium}
                        setPremium={props.setPremium}
                        standart={props.standart}
                        setStandart={props.setStandart}
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