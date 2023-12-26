import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import {useParams} from "react-router-dom";
import { getArticle } from "../../api";

const StatementText = ({...props}) => {
    const [text, setText] = useState("");
    let {id} = useParams();
    const completedArticle = [];
    const filteredArticle = props.articles.filter((article) => article._id === id);
    completedArticle.push(...filteredArticle);

    const get = async() => {
        await getArticle(id).then(response => {
            setText(response.data.articleHtml);
        });
    }
    useEffect(() => {
        get(id);
    }, []);

    return (
        <div className={classes.statementsTextWrapper}>
            {
                completedArticle.map((article) =>
                    <div key={article._id} style={{width: '100%', minHeight:'400px'}}>
                        <h1 className={classes.statementTitle} >{article.articleName}</h1>
                        <div dangerouslySetInnerHTML={{__html: text}} className={classes.statementText} />
                    </div>
                )
            }
        </div>
    );
};

export default StatementText;