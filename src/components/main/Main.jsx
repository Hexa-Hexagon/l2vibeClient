import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import Servers from "../servers/Servers";
import {Route, Routes, useParams} from "react-router-dom";
import MainStatements from "../mainStatements/MainStatements";
import StatementText from "../statementText/StatementText";
import EditStatements from "../editStatements/EditStatements";
import {getArticle} from "../../api";

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
                        <StatementText articles={props.articles} isEdit={props.isEdit}/>
                    }/>
            </Routes>
        </main>
    );
};

export default Main;