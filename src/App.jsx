import classes from "./app.module.scss";
import {getArticles, getBanners, getServers} from "./api";
import React, {useEffect,useState} from "react";
import Site from "./components/site/Site";
import {lan} from "./languages";
import Header from "./components/header/Header";
import EditBlockForm from "./components/editBlockForm/EditBlockForm";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

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
            getBanners().then(res => setBanners(res.data));
            getArticles().then(res => setArticles(res.data));
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }


    };

    useEffect(() => {
        get();
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
                        editStatements={editStatements}
                        setEditStatements={setEditStatements}
                        update={get}
                        isEdit={isEdit}
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
                            selectLan={selectLan}
                            startingThisWeek={startingThisWeek}
                            startingThisMonth={startingThisMonth}
                            startsLater={startsLater}
                            justOpened={justOpened}
                            started={started}
                            bonusStarted={bonusStarted}
                            banners={banners}
                            articles={articles}
                            statements={statements}
                            setStatements={setStatements}
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