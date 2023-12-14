import classes from "./app.module.scss";
import * as moment from "moment";
import React, {useEffect, useState} from "react";
import Site from "./components/site/Site";
import api from "./api";
import {lan} from "./languages";
import Header from "./components/header/Header";
import EditBlockForm from "./components/editBlockForm/EditBlockForm";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    const [selectLan, setSelectLan] = useState(lan.EN);
    const [banners, setBanners] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [password, setPassword] = useState("");
    const [kingVip, setKingVip] = useState([]);
    const [superVip, setSuperVip] = useState([]);
    const [vip, setVip] = useState([]);
    const [premium, setPremium] = useState([]);
    const [standart, setStandart] = useState([]);
    const [started, setStarted] = useState([]);
    const [startingThisMonth, setStartingThisMonth] = useState([]);
    const [startingThisWeek, setStartingThisWeek] = useState([]);
    const [justOpened, setJustOpened] = useState([]);
    const [startsLater, setStartsLater] = useState([]);
    const [bonusStarted, setBonusStarted] = useState([]);
    const [errorStyle, setErrorStyle] = useState({});

    async function get() {
        const res = await api.get("/");
        const today = new Date();
        const dayInMonth = new Date(new Date().getFullYear(), new Date().getMonth(),
            0).getDate() - new Date().getDate();
        const day = 7 - new Date().getDay();
        const day45 = new Date().setDate(new Date().getDate() - 45);
        today.setHours(0, 0, 0, 0);
        for (let i = 0; i < res.data.length; ++i) {
            const date = (new Date(res.data[i].dateOfStartingServer));
            date.setHours(0, 0, 0, 0);
            if (res.data[i].status === "King VIP") {
                setKingVip(sites => [...sites, res.data[i]]);
            } else if (date < today) {
                if (res.data[i].isAction) setBonusStarted(sites => [...sites, res.data[i]]);
                else setJustOpened(sites => [...sites, res.data[i]]);
            } else if (date < day45) {
                if (res.data[i].isAction) setBonusStarted(sites => [...sites, res.data[i]]);
                else setStarted(sites => [...sites, res.data[i]]);
            } else if (date < new Date().setDate(new Date().getDate() + day)) {
                setStartingThisWeek(sites => [...sites, res.data[i]]);
            } else if (date < new Date().setDate(new Date().getDate() + dayInMonth)) {
                setStartingThisMonth(sites => [...sites, res.data[i]]);
            } else {
                setStartsLater(sites => [...sites, res.data[i]]);
            }
        }
    }

    async function getBanners() {
        const res = await api.get("/banners");
        setBanners(res.data);
    }

    async function getEdit() {
        setKingVip([]);
        setSuperVip([]);
        setVip([]);
        setPremium([]);
        setStandart([]);
        const res = await api.get("/");
        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].status === "King VIP") {
                setKingVip(sites => [...sites, res.data[i]]);
            } else if (res.data[i].status === "Super VIP") {
                setSuperVip(sites => [...sites, res.data[i]]);
            } else if (res.data[i].status === "VIP") {
                setVip(sites => [...sites, res.data[i]]);
            } else if (res.data[i].status === "Premium") {
                setPremium(sites => [...sites, res.data[i]]);
            } else if (res.data[i].status === "Standart") {
                setStandart(sites => [...sites, res.data[i]]);
            }
        }
    }

    useEffect(
        () => {
            get();
            getBanners();
            setKingVip([...kingVip].sort(
                (a, b) => (moment(b.dateOfStartingServer, "YY.MM.DD") - moment(
                    a.dateOfStartingServer, "YY.MM.DD"))));
            setStarted([...started].sort(
                (a, b) => moment(b.dateOfStartingServer, "YY.MM.DD") - moment(
                    a.dateOfStartingServer, "YY.MM.DD")));
            setStartingThisMonth([...startingThisMonth].sort(
                (a, b) => moment(b.dateOfStartingServer, "YY.MM.DD") - moment(
                    a.dateOfStartingServer, "YY.MM.DD")));
            setStartingThisWeek([...startingThisWeek].sort(
                (a, b) => moment(b.dateOfStartingServer, "YY.MM.DD") - moment(
                    a.dateOfStartingServer, "YY.MM.DD")));
            setJustOpened([...justOpened].sort(
                (a, b) => moment(b.dateOfStartingServer, "YY.MM.DD") - moment(
                    a.dateOfStartingServer, "YY.MM.DD")));
            setStartsLater([...startsLater].sort(
                (a, b) => moment(b.dateOfStartingServer, "YY.MM.DD") - moment(
                    a.dateOfStartingServer, "YY.MM.DD")));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );
    return (
        <div className={classes.App}>
            <Header
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                selectLan={selectLan}
                setSelectLan={setSelectLan}
            />
            {
                isEdit === true ?
                    <EditBlockForm
                        kingVip={kingVip}
                        setKingVip={setKingVip}
                        superVip={superVip}
                        setSuperVip={setSuperVip}
                        vip={vip}
                        setVip={setVip}
                        premium={premium}
                        setPremium={setPremium}
                        standart={standart}
                        setStandart={setStandart}
                        banners={banners}
                        setBanners={setBanners}
                        getEdit={getEdit}
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
                        />

                        <Footer
                            selectLan={selectLan}
                            errorStyle={errorStyle}
                            setErrorStyle={setErrorStyle}
                            password={password}
                            setPassword={setPassword}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                            getEdit={getEdit}
                        />
                    </div>
            }
        </div>
    );
}

export default App;