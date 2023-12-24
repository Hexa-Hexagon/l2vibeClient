import React, {useState} from "react";
import classes from "../../app.module.scss";
import {Link, useParams} from "react-router-dom";

const StatementText = ({...props}) => {
    let {id} = useParams();
    const completedArticle = [];
    const filteredArticle = props.articles.filter((article) => article.id === id);
    completedArticle.push(...filteredArticle);

    return (
        <div className={classes.statementsTextWrapper}>
            {
                completedArticle.map((article) =>
                    <div key={article.id}>
                        <h1 className={classes.statementTitle} >{article.name}</h1>
                        <p className={classes.statementText} >{article.text}</p>
                    </div>
                )
            }
        </div>
    );
};

export default StatementText;