import React, {useState} from "react";
import classes from "../../app.module.scss";
import {lan} from "../../languages";

const Header = ({...props}) => {

    const selectLanguageButton = {
        backgroundColor: "#4477CEbf",
        color: "#35155D"
    };

    const [lb1, setLB1] = useState({});
    const [lb2, setLB2] = useState(selectLanguageButton);
    const [lb3, setLB3] = useState({});
    return (
        <header className={classes.header}>
            <p className={classes.anons}>{props.selectLan.Anons}</p>
            <div className={classes.line}/>
            <div className={classes.nameSiteAndSelectLanguageForm}>

                <p className={classes.nameSite}>L2VIBE.COM</p>
                <div className={classes.homeButtonAndSelectLanguageForm}>
                    {
                        props.isEdit === true ?
                            <div>
                                <input type={"submit"} onClick={() => {
                                    window.location.reload();
                                }} value={""} className={classes.homeButton}/>
                            </div>
                            :
                            <div/>
                    }
                    <div className={classes.selectLanguageForm}>
                        <button className={classes.languageButtonL} style={lb1}
                                onClick={() => {
                                    setLB1(selectLanguageButton);
                                    setLB2({});
                                    setLB3({});
                                    props.setSelectLan(lan.UK);
                                }}
                        >УК
                        </button>
                        <button className={classes.languageButton} style={lb2} onClick={() => {
                            setLB2(selectLanguageButton);
                            setLB1({});
                            setLB3({});
                            props.setSelectLan(lan.EN);
                        }}>EN
                        </button>
                        <button className={classes.languageButtonR} style={lb3} onClick={() => {
                            setLB3(selectLanguageButton);
                            setLB1({});
                            setLB2({});
                            props.setSelectLan(lan.RU);
                        }}>РУ
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;