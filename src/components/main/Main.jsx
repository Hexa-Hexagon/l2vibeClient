import React from "react";
import classes from "../../app.module.scss";
import Servers from "../servers/Servers";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainStatements from "../mainStatements/MainStatements";
import StatementText from "../statementText/StatementText";

const Main = ({...props}) => {
    return (
        <main className={classes.main}>
            <Router>
                <Routes>
                    <Route path="/statements/:id" element={
                        <StatementText articles={props.articles} isEdit={props.isEdit}/>
                    }/>
                    <Route path="/statements" element={
                        <MainStatements
                            articles={props.articles}
                            pageCount={props.pageCount}
                            setPageCount={props.setPageCount}
                            setArticles={props.setArticles}
                            setStatements={props.setStatements}
                            statements={props.statements}
                        />
                    }/>
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
                </Routes>
            </Router>
        </main>
    );
};

export default Main;