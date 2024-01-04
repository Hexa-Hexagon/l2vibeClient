import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import inputClass from "../createNewSite/createNewSite.module.scss";
import buttonClass from "../editSite/editSite.module.scss";
import CreateStatements from "../createArticle/CreateStatements";
import {deleteArticle, getArticles} from "../../api";
import {Link} from "react-router-dom";
import {Container, Pagination, Stack, Link as PageLink} from "@mui/material";


const Statements = ({...props}) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getArticles(page).then((res) => {
            if (res) {
                props.setPageCount(res.data.count);
                props.setArticles(res.data.articles);
            }
        });
    }, [page]);

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
                    updateArticles={props.updateArticles}
                />
            </div>

            <div className={classes.statements}>
                {props.articles.map((article) =>
                    <PageLink className={classes.statementsMain} key={article._id}>
                        <div className={classes.editWrapper}>
                            <Link to={`/statements/${article._id}`}
                                  className={classes.imageWrapper}>
                                <img className={classes.articleImage}
                                     src={`https://api.l2vibe.com/images/${article.articleImage}`}
                                />
                                <p className={classes.statementLink}>{article.articleName}</p>
                            </Link>
                            <div className={classes.editButtonWrapper}>
                                <input type="submit" value={""} className={buttonClass.delete}
                                       onClick={() => {
                                           deleteArticle(article._id).then(() => props.updateArticles())
                                       }}/>
                                <Link to={`statements/${article._id}`}
                                      className={buttonClass.editButton}
                                      onClick={() => get(article._id)}/>
                            </div>
                        </div>

                    </PageLink>
                )
                }
            </div>
            <Container>
                <Stack spacing={2}>
                    {
                        props.pageCount > 1 ?
                            <Pagination
                                count={props.pageCount}
                                page={page}
                                onChange={(_, pageNum) => setPage(pageNum)}
                                className={classes.pagination}
                            />
                            : null
                    }

                </Stack>
            </Container>

        </div>
    );
};

export default Statements;