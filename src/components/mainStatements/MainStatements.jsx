import React, { useEffect } from "react";
import classes from "../../app.module.scss";
import {Link} from "react-router-dom";

const MainStatements = ({...props}) => {

    useEffect(() => {
        props.setStatements(true);
    }, []);

    return (
        <div className={classes.mainWrapper}>
            <div className={classes.homeButtonWrapper}>
                <Link className={classes.homeButton} to="/"
                      onClick={() => props.setStatements(false)}></Link>
            </div>
            <div className={classes.statements}>
                {props.articles.map((article) =>
                    <div className={classes.statementsMain} key={article._id}>
                        <Link className={classes.statementLink}
                              to={`/statements/${article._id}`}>{article.articleName}</Link>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default MainStatements;