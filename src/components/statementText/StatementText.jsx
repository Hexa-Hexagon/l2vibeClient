import React from "react";
import classes from "../../app.module.scss";
import {Link} from "react-router-dom";

const StatementText = ({...props}) => {
    return (
        <div className={classes.statementsTextWrapper}>
            {props.articles.map((article) =>
                <div  key={article.id}>
                   <h1 className={classes.statementTitle}>{article.name}</h1>
                    <p className={classes.statementText}>{article.text}</p>
                </div>
            )
            }
        </div>
    );
};

export default StatementText;