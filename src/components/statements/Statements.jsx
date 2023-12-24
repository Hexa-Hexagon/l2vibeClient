import React from "react";
import classes from "../../app.module.scss";
import {Link, Route, Routes} from "react-router-dom";
import inputClass from "../createNewSite/createNewSite.module.scss";
import buttonClass from "../editSite/editSite.module.scss";
import accept from "../../images/acccept.png";
import CreateStatements from "../textEditor/CreateStatements";
import EditStatements from "../editStatements/EditStatements";

const Statements = ({...props}) => {
    return (
        <div className={!props.editStatements ? classes.statementWrapper : classes.disableWrapper}>

            <div className={classes.statementForm}>
                <div className={classes.statementButtons}>
                    <button className={inputClass.createButton}
                            onClick={() => props.setCreateActive((prev) => !prev)}/>

                </div>
                <CreateStatements
                    createActive={props.createActive}
                    setCreateActive={props.setCreateActive}
                />
            </div>

            <div className={classes.statements}>
                {props.articles.map((article) =>
                    <div className={classes.statementsMain} key={article.id}>
                        <a className={classes.statementLink} href={"#"}>{article.name}</a>
                        <button className={buttonClass.delete}/>
                        <button className={buttonClass.editButton}
                                onClick={() => !props.editStatements ? props.setEditStatements
                                (true) : null}/>
                    </div>
                )
                }
            </div>

        </div>
    );
};

export default Statements;