import React from "react";
import classes from "../../app.module.scss";
import {Link} from "react-router-dom";

const MainStatements = ({...props}) => {
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.homeButtonWrapper}>
                <Link className={classes.homeButton} to="/"
                      onClick={() => props.setStatements(false)}></Link>
            </div>
            <div className={classes.statements}>
                {props.articles.map((article) =>
                    <div className={classes.statementsMain} key={article.id}>
                        <Link className={classes.statementLink}
                              to={`/statements/${article.id}`}
                              onClick={props.setStatements(true)}>{article.name}</Link>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default MainStatements;