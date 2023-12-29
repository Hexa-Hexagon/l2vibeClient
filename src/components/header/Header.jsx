import React, {useState} from "react";
import classes from "../../app.module.scss";

const Header = ({...props}) => {

    const selectLanguageButton = {
        backgroundColor: "#4477CEbf",
        color: "#35155D"
    };

    const [lb1, setLB1] = useState(
        localStorage.getItem("language") === "uk" ? selectLanguageButton : {});

    const [lb2, setLB2] = useState(
        localStorage.getItem("language") === "en" ? selectLanguageButton :
            localStorage.getItem("language") === null ? selectLanguageButton : {}
    );
    const [lb3, setLB3] = useState(
        localStorage.getItem("language") === "ru" ? selectLanguageButton : {});


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
                                    props.setIsEdit(false);
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
                                    props.setLanguages("uk");
                                }}
                        >УК
                        </button>
                        <button className={classes.languageButton} style={lb2} onClick={() => {
                            setLB2(selectLanguageButton);
                            setLB1({});
                            setLB3({});
                            props.setLanguages("en");
                        }}>EN
                        </button>
                        <button className={classes.languageButtonR} style={lb3} onClick={() => {
                            setLB3(selectLanguageButton);
                            setLB1({});
                            setLB2({});
                            props.setLanguages("ru");
                        }}>РУ
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;