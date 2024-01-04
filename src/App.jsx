import classes from "./app.module.scss";
import {createArticle, deleteArticle, getArticles, getBanners, getServers} from "./api";
import React, {useEffect, useState} from "react";
import Site from "./components/site/Site";
import {lan} from "./languages";
import Header from "./components/header/Header";
import EditBlockForm from "./components/editBlockForm/EditBlockForm";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./normalize.css";
import {BrowserRouter} from "react-router-dom";

function App() {
    const [languages, setLanguages] = useState(localStorage.getItem("language") || "en");
    const [selectLan, setSelectLan] = useState(lan.EN);
    const [banners, setBanners] = useState([]);
    const [articles, setArticles] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [statements, setStatements] = useState(false);
    const [editStatements, setEditStatements] = useState(false);
    const [password, setPassword] = useState("");
    const [kingVip, setKingVip] = useState([]);
    const [started, setStarted] = useState([]);
    const [startingThisMonth, setStartingThisMonth] = useState([]);
    const [startingThisWeek, setStartingThisWeek] = useState([]);
    const [justOpened, setJustOpened] = useState([]);
    const [startsLater, setStartsLater] = useState([]);
    const [bonusStarted, setBonusStarted] = useState([]);
    const [errorStyle, setErrorStyle] = useState({});
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState();

    const get = async () => {

        try {
            const servers = await getServers();
            setKingVip(servers.kingVip || []);
            setJustOpened([servers.justOpened]);
            setStarted([servers.timeTested]);
            setStartingThisWeek([servers.thisWeek]);
            setStartingThisMonth([servers.thisMonth]);
            setStartsLater([servers.startLater]);
            setBonusStarted([servers.bonusStarted]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }

    };

    const updateArticles = async () => {
        try {
            getArticles().then(res => {
                if (res) {
                    setArticles(res.data.articles);
                    setPageCount(res.data.count);
                }
            });
        } catch (e) {
            console.error(e.message);
        }
    }

    const updateBanners = async () => {
        try {
            getBanners().then(res => res ? setBanners(res.data) : null);
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        get()
        updateArticles()
        updateBanners()
    }, []);

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

    if (loading) {
        return (<h1>Loading...</h1>);
    }

    return (
        <div className={classes.App}>

            <Header
                update={get}
                languages={languages}
                setLanguages={setLanguages}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                selectLan={selectLan}
                setSelectLan={setSelectLan}
            />
            {
                isEdit === true ?
                    <BrowserRouter>
                        <EditBlockForm
                            statements={statements}
                            kingVip={kingVip}
                            banners={banners}
                            setKingVip={setKingVip}
                            selectLan={selectLan}
                            startingThisWeek={startingThisWeek}
                            startingThisMonth={startingThisMonth}
                            startsLater={startsLater}
                            justOpened={justOpened}
                            started={started}
                            bonusStarted={bonusStarted}
                            setBanners={setBanners}
                            articles={articles}
                            pageCount={pageCount}
                            setPageCount={setPageCount}
                            editStatements={editStatements}
                            setEditStatements={setEditStatements}
                            update={get}
                            isEdit={isEdit}
                            setArticles={setArticles}
                            updateArticles={updateArticles}
                            updateBanners={updateBanners}
                        />
                    </BrowserRouter>

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
                            selectLan={selectLan}
                            startingThisWeek={startingThisWeek}
                            startingThisMonth={startingThisMonth}
                            startsLater={startsLater}
                            justOpened={justOpened}
                            started={started}
                            bonusStarted={bonusStarted}
                            banners={banners}
                            articles={articles}
                            setArticles={setArticles}
                            statements={statements}
                            setStatements={setStatements}
                            pageCount={pageCount}
                            setPageCount={setPageCount}
                            isEdit={isEdit}
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