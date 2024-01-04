import React, {useState} from "react";
import classes from "../../app.module.scss";
import CreateNewSite from "../createNewSite/CreateNewSite";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditServer from "../editServer/EditServer";
import Statements from "../statements/Statements";
import EditStatements from "../editStatements/EditStatements";
import {Routes, Route} from "react-router-dom";

const EditBlockForm = ({...props}) => {

    const [createActive, setCreateActive] = useState(false);
    const [articleId, setArticleId] = useState("");

    return (
        <div className={classes.editBlockFormAndCreateNewSite}>

            {!props.statements ? <CreateNewSite update={props.update}/> : null}
            <div className={classes.editBlockForm}>
                {
                    props.statements !== true ?

                        <EditServer
                            kingVip={props.kingVip}
                            startingThisWeek={props.startingThisWeek}
                            selectLan={props.selectLan}
                            startingThisMonth={props.startingThisMonth}
                            startsLater={props.startsLater}
                            justOpened={props.justOpened}
                            started={props.started}
                            bonusStarted={props.bonusStarted}
                            banners={props.banners}
                            update={props.update}
                            updateBanners={props.updateBanners}
                        />
                        :
                        <Statements
                            articles={props.articles}
                            setArticles={props.setArticles}
                            setPageCount={props.setPageCount}
                            pageCount={props.pageCount}
                            createActive={createActive}
                            setCreateActive={setCreateActive}
                            setEditStatements={props.setEditStatements}
                            editStatements={props.editStatements}
                            setArticleId={setArticleId}
                            update={props.update}
                            updateArticles={props.updateArticles}
                        />

                }

                <Routes>
                    <Route path="statements/:id" element={
                        <EditStatements
                            articles={props.articles}
                            setEditStatements={props.setEditStatements}
                            editStatements={props.editStatements}
                        />
                    }/>
                </Routes>
            </div>
        </div>

    );
};

export default EditBlockForm;