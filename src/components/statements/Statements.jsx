import React from "react";
import classes from "../../app.module.scss";
import {Link} from "react-router-dom";
import inputClass from "../createNewSite/createNewSite.module.scss";
import buttonClass from "../editSite/editSite.module.scss";
import accept from "../../images/acccept.png";
import CreateStatements from "../textEditor/CreateStatements";

const Statements = ({...props}) => {
    return (
        <div className={classes.statementWrapper}>
            <div className={classes.statementForm}>
                <div className={classes.statementButtons}>
                    <button className={inputClass.createButton}
                            onClick={() => props.setCreateActive((prev)=>!prev)}/>
                    <button className={buttonClass.delete}/>
                    <button className={buttonClass.editButton}/>
                </div>
                    <CreateStatements
                        createActive={props.createActive}
                        setCreateActive={props.setCreateActive}
                    />
            </div>

            <div className={classes.statements}>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink}
                       href={"#"}>fgdfgsdfsdfsdfsdfsdfssfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
                <div className={classes.statementsMain}>
                    <img src={accept} className={classes.statementImage} alt="banner"/>
                    <a className={classes.statementLink} href={"#"}>fgdfgsdfg</a>
                </div>
            </div>

        </div>
    );
};

export default Statements;