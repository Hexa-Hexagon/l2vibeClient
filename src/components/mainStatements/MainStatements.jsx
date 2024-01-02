import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import {Link} from "react-router-dom";
import {Container, Pagination, Stack, Link as PageLink} from "@mui/material";
import {getArticles} from "../../api";

const MainStatements = ({...props}) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        props.setStatements(true);
        getArticles(page).then((res) => {
            if (res) {
                props.setPageCount(res.data.count);
                props.setArticles(res.data.articles);
            }
        });
    }, [page]);

    return (
        <div className={classes.mainWrapper}>
            <div className={classes.homeButtonWrapper}>
                <Link className={classes.homeButton} to="/"
                      onClick={() => props.setStatements(false)}></Link>
            </div>
            <div className={classes.statements}>
                {props.articles.map((article) =>
                    <PageLink className={classes.statementsMain} key={article._id}>
                        <Link to={`/statements/${article._id}`} className={classes.imageWrapper}>
                            <img className={classes.articleImage}
                                 src={`https://api.l2vibe.com/images/${article.articleImage}`} alt=""
                            />
                            <p className={classes.statementLink}>{article.articleName}</p>
                        </Link>

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

export default MainStatements;