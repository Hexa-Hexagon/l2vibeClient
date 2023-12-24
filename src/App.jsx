import classes from "./app.module.scss";
import * as moment from "moment";
import {getArticles, getBanners, getServers} from "./api";
import React, {useEffect, useState} from "react";
import Site from "./components/site/Site";
import api from "./api";
import {lan} from "./languages";
import Header from "./components/header/Header";
import EditBlockForm from "./components/editBlockForm/EditBlockForm";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    const [languages, setLanguages] = useState(localStorage.getItem("language") || "en");
    const [selectLan, setSelectLan] = useState(lan.EN);
    const [banners, setBanners] = useState([
        {id: "1", name: "Test"},
        {id: "2", name: "Test"},
        {id: "3", name: "Test"},]
    );
    const [articles, setArticles] = useState([
        {
            id: "1",
            name: "Test",
            text: "Test asfasdfsf fdsgggsdgsd gsdfg dfgdsfg fggfhdfhdfh gfhdfgh"
        },
        {id: "2", name: "Test"},
        {id: "3", name: "Test"},
        {id: "4", name: "Test"},
        {id: "5", name: "Test"},
        {id: "6", name: "Test"}
    ]);
    const [isEdit, setIsEdit] = useState(false);
    const [statements, setStatements] = useState(false);
    const [editStatements, setEditStatements] = useState(false);
    const [password, setPassword] = useState("");
    const [kingVip, setKingVip] = useState([
        {id: "1", nameSite: "Test"},

    ]);
    const [servers, setServers] = useState([
        {id: "1", name: "Test"},
        {id: "2", name: "Test"},
        {id: "3", name: "Test"},]);
    const [started, setStarted] = useState([]);
    const [startingThisMonth, setStartingThisMonth] = useState([]);
    const [startingThisWeek, setStartingThisWeek] = useState([]);
    const [justOpened, setJustOpened] = useState([
        {id: "1", name: "Test"},

    ]);
    const [startsLater, setStartsLater] = useState([]);
    const [bonusStarted, setBonusStarted] = useState([]);
    const [errorStyle, setErrorStyle] = useState({});

    // useEffect(() => {
    //     getServers().then(res => setServers(res.data));
    //     getBanners().then(res => setBanners(res.data));
    //     getArticles().then(res => setArticles(res.data));
    // }, []);

    useEffect(() => {
        localStorage.setItem("language", languages);
        if (localStorage.getItem("language") === "uk") {
            setSelectLan(lan.UK);
        } else if (localStorage.getItem("language") === "en") {
            setSelectLan(lan.EN);
        } else if (localStorage.getItem("language") === "ru") {
            setSelectLan(lan.RU);
        }
    }, [languages]);
    return (
        <div className={classes.App}>

            <Header
                languages={languages}
                setLanguages={setLanguages}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                selectLan={selectLan}
                setSelectLan={setSelectLan}
            />
            {
                isEdit === true ?
                    <EditBlockForm
                        statements={statements}
                        kingVip={kingVip}
                        banners={banners}
                        setBanners={setBanners}
                        articles={articles}
                        editStatements={editStatements}
                        setEditStatements={setEditStatements}
                    />
                    :
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    }}>

                        <div className={classes.kingVipForm}>
                            {kingVip.length === 1 ? <div className={classes.kingVipForm}
                                                         style={{justifyContent: "center"}}>
                                <Site site={kingVip[0]}/></div> : kingVip.length < 3 ? kingVip.map(
                                    site => <Site site={site} key={site._id}/>) :
                                <div className={classes.kingVipForm}>
                                    <Site site={kingVip[0]}/>
                                    <Site site={kingVip[1]}/>
                                    <Site site={kingVip[2]}/>
                                </div>
                            }
                        </div>

                        <Main
                            startingThisWeek={startingThisWeek}
                            selectLan={selectLan}
                            startingThisMonth={startingThisMonth}
                            startsLater={startsLater}
                            justOpened={justOpened}
                            started={started}
                            bonusStarted={bonusStarted}
                            banners={banners}
                            articles={articles}
                            setStatements={setStatements}
                            statements={statements}
                        />

                        <Footer
                            selectLan={selectLan}
                            errorStyle={errorStyle}
                            setErrorStyle={setErrorStyle}
                            password={password}
                            setPassword={setPassword}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                            statements={statements}
                        />
                    </div>
            }
        </div>
    );
}

export default App;