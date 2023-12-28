import React from "react";
import classes from "../../app.module.scss";
import inputClass from "../createNewSite/createNewSite.module.scss";
import buttonClass from "../editSite/editSite.module.scss";
import CreateStatements from "../createArticle/CreateStatements";
import {deleteArticle} from "../../api";

const Statements = ({...props}) => {


    const get = (id) => {
        if (!props.editStatements) {
            props.setEditStatements(true);
        }
        props.setArticleId(id);
    };

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
                    update={props.update}
                />
            </div>

            <div className={classes.statements}>
                {props.articles.map((article) =>
                    <div className={classes.statementsMain} key={article._id}>
                        <a className={classes.statementLink} href={"#"}>{article.articleName}</a>
                        <button className={buttonClass.delete} onClick={() => {
                            deleteArticle(article._id);
                            props.update();
                        }}/>
                        <button className={buttonClass.editButton}
                                onClick={() => get(article._id)}/>
                    </div>
                )
                }
            </div>

        </div>
    );
};

export default Statements;